
const express = require ('express')

const router = express.Router()

const koders = require('../usecases/koder')
// router conjunto y subconjunto de rutas 
//funcion basicamente como lo hace app

router.get('/', async (request,response) => {
try{
    const allKoders = await koders.getAll()

    response.json({
        succcess: true,
        data: {
            koders: allKoders
        }
    })
}catch(error){
    response.status(400)
    response.json({
        success: false,
        error: error.message
    })
}
})
router.post('/', async (request,response) => {
    try{
        const newKoderData = request.body

        const newKoder= await koders.create(newKoderData)
    
        response.json({
            succes:true,
            data: {
                newKoder
            }

        })
    }catch(error){
        response.status(400)
        response.json({
            success: false,
            error: error.message      
    })
    }
})

module.exports = router