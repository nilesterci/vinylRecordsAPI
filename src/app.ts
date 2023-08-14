import morgan from "morgan";
import discRouter from "./routers/discRouter";
import cors from "cors";
import helmet from "helmet";
import swaggerDocs from "../docs/swagger.json";
import dotenv from 'dotenv';

dotenv.config();

var bodyParser = require('body-parser')
const express = require("express");
const app = express();
const swaggerUI = require("swagger-ui-express");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/disc", discRouter);
app.use('/', swaggerUI.serve, swaggerUI.setup(swaggerDocs));


const PORT = parseInt(`${process.env.PORT || 3000}`);


app.listen(PORT, () => console.log(`Server is running at ${PORT}.`));