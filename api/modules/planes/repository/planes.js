const conn = require('../../../config/database')
const Sequelize = require('sequelize')
const Factory = require('./factory')

const Plane = conn.define('avioes', {
    Cod_Aviao: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    
    Nom_Aviao: {
        type: Sequelize.STRING,
        allowNull: false
    },

    Des_Matricula: {
        type: Sequelize.STRING,
        allowNull: false
    },

    Num_lugares: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    Ind_Autonomia: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
})

Plane.belongsTo(Factory, {foreignKey: 'Cod_Fabrica', as: 'fabricas'})
Plane.sync({force: false}).then()

module.exports = Plane