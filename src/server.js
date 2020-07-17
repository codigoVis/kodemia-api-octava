

//este archivo es la definicion del servidor 
const express = require('express')

const app = express()

const kodersRouter =require('./routes/koders')
const mentorsRouter = require('./routes/mentors')
app.use(express.json())

//montando el router de koders
app.use('/koders', kodersRouter)
app.use('/mentors', mentorsRouter)
app.get('/',(request,response) => {
    response.json({
        success: true,
        message: 'Kodemia APIv8'
    })
})

module.exports = app