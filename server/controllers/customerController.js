var customers = require('../database/customers'),
  getNextId = require('./getNextId');

var nextId = getNextId(customers);

exports.getCustomers = function(req, res) {
  res.send(customers);
}

exports.getCustomerById = function(req, res) {
  var index = req.params.id - 1;
  res.send(customers[index]);
}

exports.getCustomersByUser = function(req, res) {
  res.send(customers.filter(customer => customer.userId === parseInt(req.params.id)))
}

exports.createCustomer = function(req, res) {
  var newCustomer = req.body;
  newCustomer.id = nextId;
  nextId++;
  customers.push(newCustomer);

  res.send(newCustomer);
  res.end(); 
}

