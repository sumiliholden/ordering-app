var express = require("express");
var router = express.Router();
const Product = require("../model/Products");

// Get all Products
router.get("/products", (req, res) => {
  Product.findAll()
    .then(products => {
      res.json(products);
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

// Insert Products
router.post("/products", (req, res) => {
  if (!req.body.product_name) {
    res.status(400);
    res.json({
      err: "Bad Data"
    });
  } else {
    Product.create(req.body)
      .then(() => {
        res.send("Product Added");
      })
      .catch(err => {
        res.send("Error: " + err);
      });
  }
});

// Update Products
router.put("/products/:product_id", (req, res) => {
  if (!req.body.product_name) {
    res.status(400);
    res.json({
      err: "Bad Data"
    });
  } else {
    Product.update(
      { product_name: req.body.product_name },
      { where: { product_id: req.params.product_id } }
    )
      .then(() => {
        res.send("Product Updated!");
      })
      .error(err => res.send(err));
  }
});

module.exports = router;
