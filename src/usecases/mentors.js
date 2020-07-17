

//funciones, verbos
//las acciones que el usuario puede ejercer en el sistema 
// ruta relativa
const Mentors =require ('../models/mentors')
//no usar rutas absolutas 
function getAll(){
  return Mentors.find()
}

function create(mentorsData){
    return Mentors.create(mentorsData)
}

function  findByIdAndDelete (deletementors){
    return Mentors.findByIdAndDelete(deletementors)
}
function  findByIdAndUpdate(mentorsId,updatementors){
   return Mentors.findByIdAndUpdate(mentorsId,updatementors)
}
module.exports = {
getAll,
create,
findByIdAndDelete,
findByIdAndUpdate
}