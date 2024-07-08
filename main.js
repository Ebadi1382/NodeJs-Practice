// const { alireza, alireza2, alireza3 } = require("./main");
// ----------------------------------------------path module-----------------------------------
// const path = require("path");
// console.log(path.parse(__filename));
// -----------------------------------------------os module ---------------------------------
// const os = require("os");
// console.log("Free Ram", os.freemem());
// console.log("Total Ram", os.totalmem());
// ----------------------------------------------file system module--------------------------
// const fs = require("fs");
// console.log(fs.readdirSync("./"));

// this button code is better for async

// fs.readdir("./", (err, files) => {
//   console.log(err);
//   console.log(files);
// });
// --------------------------------------------events-------------------------------------------
// const Events = require("events");

// const emiter = new Events();

// emiter.on("car", (e) => {
//   console.log(e);
//   console.log("car created");
// });

// emiter.emit("car", { time: Date.now(), cout: 13 });
// --------------------------------------------------------------http module(res,req)------------------------------
// const http = require("http");
// const moment = require("jalali-moment");
// // console.log(moment(new Date()).locale("fa").format("YYYY/MM/DD"));
// const server = http.createServer((req, res) => {
//   console.log("runned");
//   console.log(req.url);
//   if (req.url === "/products") {
//     res.write(JSON.stringify({ product: [moment(new Date()).locale("fa").format("YYYY/MM/DD")] }));
//   } else if (req.url === "/") {
//     res.write("welcome to home page");
//   } else {
//     res.write("route not found");
//   }
//   res.end();
// });
// server.listen("3000");
// ---------------------------------------------------package manage in node js -----------------------------------
const express = require("express");
const user = require("./user.json");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("ok-200");
});
app.get("/api/user", (req, res) => {
  res.json(user);
});
app.get("/api/products", (req, res) => {
  console.log(req.query);
  let result = "not query received";
  if (req.query.date || req.query.price) {
    result = "query successful received";
  }
  res.send(result);
});
app.get("/api/user/:id", (req, res) => {
  let result = user.find((item) => item.id == req.params.id);
  if (!result) {
    return res.status(404).json(["user not found"]);
  }
  res.json(result);
});
app.post("/api/user", (req, res) => {
  console.log(req.body);
  res.json("loading...");
});
const port = process.env.PORT || 80;
app.listen(port, () => console.log(`connected on port ${port}`));
