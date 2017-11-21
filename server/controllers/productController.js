var products = require('../database/products'),
  getNextId = require('./getNextId');

var nextId = getNextId(products);

exports.getProducts = function(req, res) {
  res.send(products);
}

exports.getProductById = function(req, res) {
  var index = req.params.id - 1;
  res.send(products[index]);
}

exports.getProductsByUser = function(req, res) {
  res.send(products.filter(product => product.userId === parseInt(req.params.id)))
}

exports.createProduct = function(req, res) {
  var newProduct = req.body;
  newProduct.id = nextId;
  nextId++;
  products.push(newProduct);

  res.send(newProduct);
  res.end(); 
}

