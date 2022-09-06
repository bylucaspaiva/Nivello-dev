const productsRoutes = require('express').Router();

const productsController = require('./../controllers/productsController');

productsRoutes.post('/create', (req, res) => {
  return productsController.create(req, res);
})

productsRoutes.get('/list', (req, res) => {
  return productsController.list(req, res);
})

module.exports = productsRoutes;