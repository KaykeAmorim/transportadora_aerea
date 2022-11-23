const PlaneController = require('./controller/planeController')
const express = require('express')
const router = express.Router()

router.get('/new', (req, res) => {
    const controller = new PlaneController(req, res)
    controller.pageNewPlane()
})

router.post('/save', (req,res) => {
    const controller = new PlaneController(req, res)
    controller.saveNewPlane()
})

router.get('/show', (req,res) => {
    const controller = new PlaneController(req,res)
    controller.show()
})

module.exports = router