const Sequelize = require('sequelize')

const connection = new Sequelize('companhia_aerea', 'kayke', 'k310104+', {
    host: 'localhost',
    dialect: 'mysql'
  });

module.exports = connection