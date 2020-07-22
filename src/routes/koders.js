
const express = require ('express')

const router = express.Router()

const koders = require('../usecases/koder')
const auth = require ('../middlewares/auth')


// router conjunto y subconjunto de rutas 
//funcion basicamente como lo hace app

router.use((request, response, next) => {
    console.log('middleware a nivel de router',request.vicente),
    next()
},(request,response, next) => {
 console.log('middleware router koders 2')
    next()
})

router.get('/',async(request, response,  next) => {
    console.log('middleware de endpoint Get koders')
    next()
},
 async (request,response) => {
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
router.post('/',auth, async (request,response) => {
    try{
        console.log('koder ', request.koder)
        
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
router.delete('/:id',async(request, response) => {
    try{
        const idKoderData = request.params.id

        const deleteKoder = await koders.findByIdAndDelete(idKoderData)
        
        response.json({
            success : true,
            data: {
                deleteKoder
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

router.patch('/:id', async( request, response) => {
    try{
        const idKoder = request.params.id
        const koderUpdate = request.body

        const updateKoder = await koders.findByIdAndUpdate(idKoder, koderUpdate)

        response.json({
            success: true,
            data: {
                updateKoder
            }
        })

    }catch(erroe){
        response.status(400)
        response.json({
            success: false,
            error: error.message
        })

    }
})

module.exports = router