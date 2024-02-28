const express = require('express')

// function validateForm(req,res,next) {
//     // if(typeof req.body.captainName !== 'string' || typeof req.body.title !== 'string' || typeof req.body.post !== 'string' || typeof req.body.mistakesWereMadeToday !== 'boolean' || typeof req.body.daysSinceLastCrisis !== 'number') /* res.status(400).json({message: `Invalid Inputs`}) */
//     // else next()
//     console.log(typeof req.body.captainName)
//     next()
// }

const logs = express.Router()

let logsArray = require('../models/log.model')

logs.get('/', (req, res) => {
    res.json({ logs: logsArray})
})
//SHOW
logs.get('/:id', (req, res) => {
    const { id } = req.params

    const log = logsArray.find(l => l.id === +id)

    res.json({log})
})

//CREATE
logs.post('/', (req,res) => {
    const id = logsArray[logsArray.length - 1].id + 1
    req.body.id = id
    logsArray.push(req.body)
    res.json({logs: logsArray})
})

//DELETE
logs.delete("/:id", (req,res) => {
    const { id } = req.params;

    logsArray = logsArray.filter(l => l.id !== +id)

    res.json({ logs : logsArray})
})

//UPDATE
logs.put("/:id", (req, res) => {
    const { id } = req.params;

    const logIndex = logsArray.findIndex(l => l.id === +id);

    if(logIndex > -1) {
        logsArray[logIndex] = req.body;
        res.json({ logs : logsArray})
    } else {
    res.json({message: 'ERROR'})
    }

})
module.exports = logs
