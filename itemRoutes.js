"use strict";

const express = require("express");

const items = require("./fakeDb");

const router = new express.Router();

/*
 * `GET`
 * return a list of shopping items
 * { items: [
  { name: "popsicle", price: 1.45 },
  { name: "cheerios", price: 3.40 }
]}
 */
router.get("/", function (req, res) {
  return res.json({ items });
});

/** `POST`
 * {name: "popsicle", price: 1.45} =>
  {added: {name: "popsicle", price: 1.45}}
 */

router.post("/", function (req, res) {
  const
    items.push(req.body.name, req.body.price);
  return res.send();
});

module.exports = router;