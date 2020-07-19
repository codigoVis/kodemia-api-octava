

//este archivo es la definicion del servidor 
const express = require('express')

const app = express()

const kodersRouter =require('./routes/koders')
const mentorsRouter = require('./routes/mentors')
app.use(express.json())

//middleware a nivel de aplicacion
// app.use(function(requst, response, next))
//app.use(...function) recibe una o mas funciones

app.use((request, response ,next)=>{
    console.log('Middleware de aplicacion')
 next()   
},(request, response, next) => {
    console.log('middleware 2')
    request.vicente = 'hola soy Vicente'
    next()
},(request,response, next)=> {
    console.log('middlewar 3: ',request.vicente)
    next()
})


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