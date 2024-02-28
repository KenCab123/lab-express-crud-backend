const express = require('express')
const cors = require('cors')

const app = express()

let logsController = require('./controllers/logsController')

app.use(cors())

app.use(express.json())

app.use('/api/logs', logsController)


app.get('/', (req, res) => {
    res.send(`Welcome to the Captain's Log`)
})

app.get('*', (req, res) => {
    res.status(400).json({error: "Page not found"})
})

module.exports = app