// const { alireza, alireza2, alireza3 } = require("./main");
// ----------------------------------------------path module-----------------------------------
const path = require("path");
console.log(path.parse(__filename));
// -----------------------------------------------os module ---------------------------------
// const os = require("os")
// console.log(os.freemem())
// console.log(os.totalmem())
// ----------------------------------------------file system module--------------------------
// const fs = require("fs");
// console.log(fs.readdirSync("./"));
// fs.readdir("./", (err, files) => {
//   console.log(err);
//   console.log(files);
// });
// console.log("alireza");
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
// console.log(moment(new Date()).locale("fa").format("YYYY/MM/DD"));
// const server = http.createServer((req, res) => {
//   console.log("runned");
//   console.log(req.url);
//   if (req.url === "/products") {
//     res.write(JSON.stringify({ product: [moment(new Date()).locale("fa").format("YYYY/MM/DD")] }));
//   } else {
//     res.write("route not found");
//   }
//   res.end();
// });
// server.listen("3000");
// ---------------------------------------------------package manage in node js -----------------------------------
// const express = require("express")

// const app = express()
// app.get("/",(req,res)=> {
//   res.send("ok-200")
// })
// app.listen(3000,()=>console.log("connected"))
