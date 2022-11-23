const PilotRepository = require('../repository/pilotRepository')

class PilotService{
    constructor(){
        this.pilotRepository = new PilotRepository()
    }

    async saveNewPilot(obj){
        const {name, birthday, contractDay} = obj
        let found = await this.hasPilot(name)
        if(found){
            return false
        }
        else{
            return await this.pilotRepository.insertPilot(name, birthday, contractDay)
        }
        
    }

    async hasPilot(name){
        let result = await this.pilotRepository.findByName(name)
        if(result){
            return true
        }
        return false
    }

    async findAll(){
        let obj = await this.pilotRepository.findAll()
        return obj
    }
}

module.exports = PilotService