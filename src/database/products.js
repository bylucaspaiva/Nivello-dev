const Sequelize = require('sequelize');
const productsConnection = require('./productsConnection');
 
const Products = productsConnection.define('products', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    valor: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    foto: {
      type: Sequelize.STRING,
      allowNull: false
    }
})
 
module.exports = Products;