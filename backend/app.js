const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const rootRouter = require("./routes/routes");

const app = express();

//TODO: replace this with env variables
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// parse payloads
app.use(bodyParser.urlencoded({ extended: false }));

// root routing
app.use("/", cors(corsOptions), rootRouter);

// 404 if all else fails
app.use((req, res, next) => {
  res.status(404);
});

app.listen(5000);
