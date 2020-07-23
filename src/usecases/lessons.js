
const Lessons = require ('../models/lessons')


function getAll(){
    return Lessons.find()
}
function create(newLessons){
    return Lessons.create(newLessons)
}
function findByIdAndUpdate(lessonsId, upDateLesson){
    return Lessons.findByIdAndUpdate(lessonsId, upDateLesson)
}
function  findByIdAndDelete(idDeleteData){
    return Lessons. findByIdAndDelete(idDeleteData)
}
module.exports={
    getAll,
    create,
    findByIdAndUpdate,
    findByIdAndDelete
}