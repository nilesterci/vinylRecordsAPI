import morgan from "morgan";
import discRouter from "./routers/discRouter";
import cors from "cors";
import helmet from "helmet";
import swaggerDocs from "../docs/swagger.json";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { verifyJWT } from "./auth";
import auth from "./repositories/auth";

const bcrypt = require("bcrypt");
const saltRounds = 10;

dotenv.config();

var bodyParser = require("body-parser");
const express = require("express");
const app = express();
const swaggerUI = require("swagger-ui-express");
const PORT = parseInt(`${process.env.PORT || 3000}`);
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowsMs: 15 * 60 * 1000, //15 minutos
  max: 100,
  message: "Too many requests, please try again later",
});

let logger = async (req, res, next) => {
  let log = `
  ${req.hostname} 
  ${req.method} 
  ${req.url} 
  ${req.ip}`;

  await auth.logger(log);

  next();
};

app.use(limiter);

// app.use(logger);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

//authentication
app.post("/auth", async (req, res, next) => {
  let user = await auth.validateUser(req.body.login);

  if (user) {
    if (isBase64(req.body.password)) {
      req.body.password = atob(req.body.password);
    }
    let validate = await compare(req.body.password, user["password"]);
    if (validate) {
      const id = user["iduser"];
      const token = jwt.sign({ id }, process.env.SECRET, {
        expiresIn: 3600,
      });
      return res.json({
        auth: true,
        iduser: user["iduser"],
        token: token,
      });
    }
  }

  res.status(401).json({ message: "Login inválido!" });
});

app.use("/disc", verifyJWT, discRouter);
app.use("/", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.listen(PORT, () => console.log(`Server is running at ${PORT}.`));

function encrypt(password) {
  bcrypt
    .genSalt(saltRounds)
    .then((salt) => {
      return bcrypt.hash(password, salt);
    })
    .then((hash) => {})
    .catch((err) => console.error(err.message));
}

async function compare(password, hashPass) {
  return await bcrypt.compare(password, hashPass);
}

function isBase64(str) {
  if (str === "" || str.trim() === "") {
    return false;
  }
  try {
    return btoa(atob(str)) == str;
  } catch (err) {
    return false;
  }
}
