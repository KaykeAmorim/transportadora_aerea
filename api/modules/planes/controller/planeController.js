const PlaneService = require('../service/planeService')
const PlaneRepository = require('../service/planeService')

class PlaneController {
    constructor(req, res){
        this.req = req
        this.res = res
        this.planeService = new PlaneService()
    }

    async pageNewPlane(){
        let data = await this.planeService.getFactories()
        this.res.render('newPlane', {"data": data})
    }

    async saveNewPlane(){
        const {name, code, space, factory, autonomous} = this.req.body
        let found = await this.planeService.saveNewPlane({
            "name": String(name).toUpperCase(), 
            "code": String(code).toUpperCase(), 
            "space": space, "factory": factory, 
            "autonomous": autonomous == 'on' ? true:false
        })
        if(found){
            this.res.send('Novo avião registrado')
            return true
        }
        this.res.send('Falha')
        return false
    }

    async show(){
        let data = await this.planeService.findAllPlanesWithFactories()
        console.log(data)
        this.res.render('showPlane', {"data": data})
    }
}

module.exports = PlaneController