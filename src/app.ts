import morgan from "morgan";
import discRouter from "./routers/discRouter";
import cors from "cors";
import helmet from "helmet";
import swaggerDocs from "../docs/swagger.json";
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { verifyJWT } from "./auth";
import auth from "./repositories/auth";

const bcrypt = require("bcrypt")
const saltRounds = 10
const password = "Matmat@67"

dotenv.config();

var bodyParser = require('body-parser')
const express = require("express");
const app = express();
const swaggerUI = require("swagger-ui-express");
const PORT = parseInt(`${process.env.PORT || 3000}`);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//authentication
app.post('/auth', async (req, res, next) => {
    let user = await auth.validateUser(req.body.user);
    let validate = await compare(req.body.password, user.data['password']);
    if(validate){
      const id = user.data['iduser'];
      const token = jwt.sign({ id }, process.env.SECRET, {
        expiresIn: 3600
      });
      return res.json({ auth: true, iduser: user.data['iduser'], token: token });
    }
    
    res.status(500).json({message: 'Login inválido!'});
})

app.use("/disc", verifyJWT, discRouter);
app.use('/', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.listen(PORT, () => console.log(`Server is running at ${PORT}.`));

function encrypt(){
    bcrypt
  .genSalt(saltRounds)
  .then(salt => {
    console.log('Salt: ', salt)
    return bcrypt.hash(password, salt)
  })
  .then(hash => {
    console.log('Hash: ', hash)
    
  })
  .catch(err => console.error(err.message))
}

async function compare(password, hashPass){
    return await bcrypt.compare(password, hashPass);
}