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
 * {name: "popsicle", price: 1.45} >>
  {added: {name: "popsicle", price: 1.45}}
 */

router.post("/", function (req, res) {
  const item = req.body;
  items.push(item);
  return res.json(item);
});

/**
 * `GET`
 * >> {name: "popsicle", "price": 1.45}
 */
router.get("/:name", function (req, res) {
  const foodItemName = req.params.name;
  return res.json(items.find(item => item.name === foodItemName));

});

/**
 * `PATCH`
 * {name: "new popsicle", price: 2.45} >>
  {updated: {name: "new popsicle", price: 2.45}}
 */
router.patch("/:name", function (req, res) {
  const newItem = req.body;
  items.push(newItem);
  console.log(items);
  return res.json(items.find(item => item.name === newItem.name));

});


/**
 * `DELETE`
 * {message: "Deleted"}
 */
router.delete("/:name", function (req, res) {
  const itemToGo = req.body;
  console.log(req);
  for (let i = 0; i < items.length; i++) {
    if (items[i].name === itemToGo.name) {
      items.splice(i, 1);
      return res.json({ message: "Deleted" });
    }
  }
  return res.json({ message: "Item not in Database" });
});



module.exports = router;