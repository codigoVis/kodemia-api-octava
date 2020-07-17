

const express = require ('express')

const router = express.Router()

const mentors = require('../usecases/mentors')
// router conjunto y subconjunto de rutas 
//funcion basicamente como lo hace app

router.get('/', async (request,response) => {
try{
    const allmentors = await mentors.getAll()

    response.json({
        succcess: true,
        data: {
            mentors: allmentors
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
        const newmentorsData = request.body

        const newMentors= await mentors.create(newmentorsData)
    
        response.json({
            succes:true,
            data: {
                newMentors
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
        const idMentorsData = request.params.id

        const deleteMentors = await mentors.findByIdAndDelete(idMentorsData)
        
        response.json({
            success : true,
            data: {
                deleteMentors
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
        const idMentors = request.params.id
        const mentorsUpdate = request.body

        const updateMentors = await mentors.findByIdAndUpdate(idMentors, mentorsUpdate)

        response.json({
            success: true,
            data: {
                updateMentors
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