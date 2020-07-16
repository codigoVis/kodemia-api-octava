
//funciones, verbos
//las acciones que el usuario puede ejercer en el sistema 
// ruta relativa
const Koders =require ('../models/koder')
//no usar rutas absolutas 
function getAll(){
  return Koders.find()
}

function create(koderData){
    return Koders.create(koderData)
}

module.exports = {
getAll,
create
}