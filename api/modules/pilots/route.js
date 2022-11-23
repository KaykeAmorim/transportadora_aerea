const PilotController = require('./controller/pilotController')
const express = require('express')
const router = express.Router()

router.get('/new', (req, res) => {
    const controller = new PilotController(req, res)
    controller.pageNewPilot()
})

router.post('/save', (req,res) => {
    const controller = new PilotController(req, res)
    controller.saveNewPilot()
})

router.get('/show', (req,res) => {
    const controller = new PilotController(req,res)
    controller.show()
})

module.exports = router