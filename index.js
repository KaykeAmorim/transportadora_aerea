const express = require('express')
const connection = require('./api/config/database')
const bodyParser = require('body-parser')
const routePilot = require('./api/modules/pilots/route')
const routePlane = require('./api/modules/planes/route')

const app = express()
const port = 8080

connection.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((erro) => {
        console.log('Connection has been failed')
    })


app.use('/images', express.static('images'))
app.use('/js', express.static('js'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.set('view engine', 'ejs')

app.use('/pilots', routePilot)
app.use('/planes', routePlane)

app.listen(port, () => console.log("Servidor online"))