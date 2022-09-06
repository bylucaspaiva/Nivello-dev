const userRoutes = require('express').Router();

const userController = require('./../controllers/userController');

userRoutes.post('/create', (req, res) => {
  return userController.create(req, res);
})

userRoutes.get('/list', (req, res) => {
  return userController.list(req, res);
})

module.exports = userRoutes;