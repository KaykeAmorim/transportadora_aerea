const PilotService = require('../service/pilotService')
const PilotRepository = require('../service/pilotService')

class PilotController {
    constructor(req, res){
        this.req = req
        this.res = res
        this.pilotService = new PilotService()
    }

    pageNewPilot(){
        this.res.render('newPilot')
    }

    async saveNewPilot(){
        const name = new String(this.req.body.name)
        const birthday = new Date(this.req.body.birthday)
        const contractDay = new Date(this.req.body.contractDate)
        let found = await this.pilotService.saveNewPilot({"name": name.toUpperCase(), "birthday": birthday, "contractDay": contractDay})
        if(found){
            this.res.send('Novo piloto registrado')
            return true
        }
        this.res.send('Falha')
        return false
    }

    async show(){
        let data = await this.pilotService.findAll()
        this.res.render('showPilot', {"data": data})
    }
}

module.exports = PilotController