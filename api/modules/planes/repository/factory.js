const Sequelize = require('sequelize')
const conn = require('../../../config/database')

const Factory = conn.define('fabricas', {
    Cod_Fabrica: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nom_Fabrica: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

Factory.sync({force: false}).then()
module.exports = Factory