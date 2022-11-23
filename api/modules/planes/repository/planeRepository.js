const Factory = require('./factory')
const Plane = require('./planes')

class PlaneRepository {
    constructor (){
        
    }

    async findOnePlaneByCode(code){
        let data;
        await Plane.findOne({where: {Des_Matricula: code}, raw:true}).then( result => {
            data = result;
        })
        .catch(erro => {
            console.log('deu erro')
            throw new Error(erro);
        })
        return (data)
    }

    async insertPlane(obj){
        let data;
        await Plane.create({
            Nom_Aviao: obj.name,
            Des_Matricula: obj.code,
            Num_lugares: obj.space,
            Ind_Autonomia: obj.autonomous,
            Cod_Fabrica: obj.factory
        }).then(() => {
            data = true
        }).catch(erro => {
            console.log(erro)
            data = false
        })
        return data
    }

    async findAllPlanes(){
        return await Plane.findAll({raw:true})
    }

    async findAllFactories(){
        return await Factory.findAll({raw:true})
    }

    async findAllPlanesWithFactories(){
        return await Plane.findAll({
            raw:true,
            include: [{
                model: Factory,
                as: 'fabricas',
                attributes: ['Nom_Fabrica']
            }]
        })
    }
}

module.exports = PlaneRepository