const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv/config");
// const mongoose = require("mongoose");

// security
const helmet = require("helmet");
const xssCleaner = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");

//middlewere
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(xssCleaner());
app.use(mongoSanitize());
app.use(hpp());

// const PORT = process.env.PORT;
// const DB_url = process.env.DB_url;

app.get("/", (req, res) => {
  res.status(200).json({
    msg: "this is fullStack file testing",
  });
});

//routes
const allRoutes = require("./routes/allRoutes");
//route
app.use("/api", allRoutes);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`connected on port ${port}`));
// mongoose
//   .connect(port)
//   .then((res) => {
//     app.listen(port);
//     console.log(`connected on port ${port}`);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
