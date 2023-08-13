import morgan from "morgan";
import discRouter from "./routers/discRouter";
import cors from "cors";
import helmet from "helmet";
import swaggerDocs from "../docs/swagger.json";
import dotenv from 'dotenv';

dotenv.config();

const express = require("express");
const app = express();
const swaggerUI = require("swagger-ui-express");

app.use(express.json());

app.use("/disc", discRouter);
app.use('/', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(morgan('tiny'));

app.use(cors());

app.use(helmet());

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

export default app;