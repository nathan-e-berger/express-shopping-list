"use strict";

const express = require("express");
const itemRoutes = require("./itemRoutes");
const app = express();

let items = require("./fakeDb");
console.log("itemRooutes", itemRoutes);
app.use(express.json());
app.use("/items", itemRoutes);


module.exports = app;