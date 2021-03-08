const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const main = require("./routes/main.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use("/", main);

app.listen(5000, () => {
  console.log("server is running on port 5000...");
});
