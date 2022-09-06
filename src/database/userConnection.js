const Sequelize = require('sequelize');

const UserConnection = new Sequelize('users', 'root', '1234', {dialect: 'mysql', host: 'localhost'});

module.exports = UserConnection;