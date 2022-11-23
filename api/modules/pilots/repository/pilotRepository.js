const Pilot = require('./pilot')

class PilotRepository {
    constructor (){
        
    }

    async findByName(name){
        let data;
        await Pilot.findOne({where: {Nom_Piloto: name}, raw:true}).then( result => {
            data = result;
        })
        .catch(erro => {
            console.log('deu erro')
            throw new Error(erro);
        })
        return (data)
    }

    async insertPilot(name, birthday, contractDate){
        let data;
        await Pilot.create({
            Nom_Piloto: name,
            Dta_Nascimento: birthday,
            Dta_Admissao: contractDate
        }).then(() => {
            data = true
        }).catch(erro => {
            console.log(erro)
            data = false
        })
        return data
    }

    async findAll(){
        return await Pilot.findAll({raw:true})
    }
}

module.exports = PilotRepository