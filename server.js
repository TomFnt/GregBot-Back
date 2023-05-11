const express = require('express')
const app = express()
const port = 3000

app.use('/api/v1', require('./routes/v1'))

app.get('*', (req, res) => {
    res.status(404).json({message: 'Not Found'})
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`) //Bonne pratique dans l'utilisation d'une API
    //res.sendfile(__dirname + 'views/404.hmtl') //Si on fait une view
})

