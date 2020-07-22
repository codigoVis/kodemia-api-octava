

//este archivo es la definicion del servidor 
const express = require('express')
const cors =require('cors')

const app = express()

const kodersRouter =require('./routes/koders')
const mentorsRouter = require('./routes/mentors')
const authRouter = require('./routes/auth')
const lessonsRouter = require('./routes/lessons')
const methods = require('./middlewares/method')

app.use(cors())
app.use(express.json())
app.use(methods)
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
app.use('/auth',authRouter)
app.use('/lessons',lessonsRouter)
app.get('/',(request,response) => {
    response.json({
        success: true,
        message: 'Kodemia APIv8'
    })
})

module.exports = app