const conn = require('../../../config/database')
const Sequelize = require('sequelize')

const Pilot = conn.define('piloto', {
    Cod_Piloto: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    
    Nom_Piloto: {
        type: Sequelize.STRING,
        allowNull: false
    },

    Dta_Nascimento: {
        type: Sequelize.DATE,
        allowNull: false
    },

    Dta_Admissao: {
        type: Sequelize.DATE,
        allowNull: false
    }
})

Pilot.sync({force: false}).then()

module.exports = Pilot