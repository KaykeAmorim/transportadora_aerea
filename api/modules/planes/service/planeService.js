const PlaneRepository = require('../repository/planeRepository')

class PlaneService{
    constructor(){
        this.planeRepository = new PlaneRepository()
    }

    async getFactories(){
        return await this.planeRepository.findAllFactories()
    }

    async saveNewPlane(obj){
        let found = await this.hasPlane(obj.code)
        if(found){
            return false
        }
        else{
            return await this.planeRepository.insertPlane(obj)
        }
        
    }

    async hasPlane(code){
        let result = await this.planeRepository.findOnePlaneByCode(code)
        if(result){
            return true
        }
        return false
    }

    async findAllPlanes(){
        let obj = await this.planeRepository.findAllPlanes()
        return obj
    }

    async findAllPlanesWithFactories(){
        return await this.planeRepository.findAllPlanesWithFactories()
    }
}

module.exports = PlaneService