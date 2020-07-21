const express = require ('express')

const router = express.Router()

const koders = require('../usecases/koder')
// /auth/sign-up

router.post('/sign-up' , async (request , response)=> {

    try {
        const signedUpKoder= await koders.signup(request. body)
        response.json({
            success : true,
            data: {
                koder: signedUpKoder
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            error: error.massage
        })
        
    }
})
router.post('/sign-in',async (request, response) => {
    try {
        const {password , email} = request.body
        const token = await koders.login(email, password)
        response.json({
            success: true,
            data:{
                token
            }
        })
    } catch (error) {
        response.status(401)
        response.json({
            success: false,
            error: error.message
        })
    }
})


module.exports = router