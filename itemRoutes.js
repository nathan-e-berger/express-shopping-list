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
    const item = req.body;
    items.push(item);
    return res.json(item);
});

router.get("/:name", function(req, res){
  const item = req.params.name;
  for(let foodItem in items){
    if(item in foodItem){
      return res.json(foodItem);
    }
  }
})

module.exports = router;