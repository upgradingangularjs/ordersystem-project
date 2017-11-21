var orders = require('../database/orders'),
  products = require('../database/products')
  customers = require('../database/customers')
  getNextId = require('./getNextId');

var nextId = getNextId(orders);

const today = new Date();
const date = (today.getMonth()+1) + '/' + today.getDate() + '/' + today.getFullYear();

exports.getOrders = function(req, res) {
  res.send(orders);
}

exports.getOrderById = function(req, res) {
  var index = req.params.id - 1;
  res.send(orders[index]);
}

exports.getOrdersByCustomer = function(req, res) {
  res.send(orders.filter(order => order.customerId === parseInt(req.params.id)))
}

exports.createOrder = function(req, res) {
  var newOrder = req.body;
  newOrder.totalItems = newOrder.items.map(x => x.quantity).reduce((sum, value) => sum + value, 0);
  
  let prices = [];
  newOrder.items.forEach(item => {
    let product = products.filter(p => p.id === item.productId)[0];
    prices.push(product.price * item.quantity);
  });
  newOrder.totalCost = prices.reduce((sum, value) => sum + value, 0);

  let customer = customers.filter(x => x.id === newOrder.customerId)[0];
  if (customer.getsDiscount){
    newOrder.totalSale = newOrder.totalCost - (newOrder.totalCost * (customer.discount.discountPercent/100));
  } else {
    newOrder.totalSale = newOrder.totalCost;
  }

  newOrder.orderDate = date;

  newOrder.id = nextId;
  nextId++;
  orders.push(newOrder);

  res.send(newOrder);
  res.end(); 
}

