
const express = require('express')
const router = express.Router()

const lessons = require ('../usecases/lessons')


router.get('/', async (req, res) => {
   try {
       const allLessons = await lessons.getAll()
        res.json({
            success: true,
            data:{
                lessons: allLessons
            }
        })
   } catch (error) {
       res.status(400)
       res.json({
           success: false,
           error: error.message
       })
   }
})
router.post('/',async (req,res) => {
    try {
       
        const newLessons = await lessons.create(req.body)
            res.json({
                success: true,
                data: {
                    lesson: newLessons
                }
            })
    } catch (error) {
        res.status(400)
        res.json({
            success: false,
            error: error.message
        })
        
    }
})
router.patch('/:id', async (req, res) => {
      try {
        const idLessons = req.params.id
        const lessonsUpDate = req.body
    
        const lessonUpdateId = await lessons.findByIdAndUpdate(idLessons, lessonsUpDate )
            res.json({
                success: true,
                data: {
                    lessonUpdateId
                }
            })
      } catch (error) {
            res.status(400)
            res.json({
                success: false,
                error: error.message
            })
      }

})

module.exports = router