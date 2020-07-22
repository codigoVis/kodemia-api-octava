
const Lessons = require ('../models/lessons')


function getAll(){
    return Lessons.find()
}
function create(newLessons){
    return Lessons.create(newLessons)
}
function findByIdAndUpDate(lessonsId, upDateLesson){
    return Lessons.findByIdAndUpdate(lessonsId, upDateLesson)
}
module.exports={
    getAll,
    create,
    findByIdAndUpDate
}