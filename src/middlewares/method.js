
const http = require('http')


 function methods( request, response, next){
    try {
        const method =request.method
        const url= request.url
        const body= JSON.stringify(request.body)
        console.log('El metode es ',`[${method}]: ${url} - ${body} `)
        
        next()
    } catch (error) {
        response.json({
            success: false,
            error: error.message
        })
    }
}

module.exports=methods