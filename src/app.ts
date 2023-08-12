import morgan from "morgan";
import discRouter from "./routers/discRouter";
import cors from "cors";
import helmet from "helmet";
import swaggerDocs from "../docs/swagger.json";

const express = require("express");
const app = express();
const port = 3000;
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

app.use(express.json());

app.use('/', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use(
  express.urlencoded({
    extended: true,
  })
);



app.use("/disc", discRouter);

app.use(morgan('tiny'));

app.use(cors());

app.use(helmet());

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

export default app;
