var express = require("express");
var bodyParser = require("body-parser");
var products = require("./routes/products");
var cors = require("cors");
var port = 3000;
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", products);

app.listen(port, function() {
  console.log("Server started on port" + port);
});
