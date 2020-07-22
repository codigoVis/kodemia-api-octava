const jwt = require('../lib/jwt')
const Koders= require('../models/koder')

async function auth(request, response, next){
 // todas las llamadas deberian tener un header authorization con un token 
try {
    const { authorization}= request.headers
    console.log('auth: ', authorization)
    const decodedToken = jwt.verify(authorization)
    console.log('decoded token: ', decodedToken)
    const koder = await Koders.findById(decodedToken)
    request.koder=koder
     next()

} catch (error) {
        response.json({
            success: false,
            error: error.message
        })
    
}

}

module.exports=auth