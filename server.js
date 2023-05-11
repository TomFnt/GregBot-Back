const express = require('express')
const app = express()
const port = 3000

const dialogs = require('./dialog.json')

app.get('/dialog/question', (req, res) => {
    const questions = dialogs.map(({id,question}) => ({id, question}))
})

app.get('/dialog/answer/:id', (req, res) => {
    const dialog = dialogs.find(dialog => dialog.id === parseInt(req.params.id))
    console.log(req.params.id)
    if(!dialog) return res.status(404).send()
    res.json(dialog)
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})
