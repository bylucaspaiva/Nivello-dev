const Sequelize = require('sequelize');

const ProductsConnection = new Sequelize('products', 'root', '1234', {dialect: 'mysql', host: 'localhost'});

module.exports = ProductsConnection;