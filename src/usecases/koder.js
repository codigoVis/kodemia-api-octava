
//funciones, verbos
//las acciones que el usuario puede ejercer en el sistema 
// ruta relativa
const Koders =require ('../models/koder')
//no usar rutas absolutas 
const bcrypt  = require('../lib/bcrypt')
const jwt = require('../lib/jwt')

function getAll(){
  return Koders.find()
}

function create(koderData){
    return Koders.create(koderData)
}

function  findByIdAndDelete (deleteKoder){
    return Koders.findByIdAndDelete(deleteKoder)
}
function  findByIdAndUpdate(koderId,updateKoder){
   return Koders.findByIdAndUpdate(koderId,updateKoder)
}
async function signup (koderDataSignup){
  
  const {password,email}=koderDataSignup

  const emailValid = await Koders.findOne({ email})
  if(emailValid){
 
    throw  new Error('Email exists')
}

  // encriptar la contraseña
  const passwordEncripted = await bcrypt.hash (password)

  return Koders.create({
    ... koderDataSignup,
    password : passwordEncripted
  })
}
 async function login (email, passwordPlain ) {
   //buscar el usuario en la base de datos
    const koderByEmail = await Koders.findOne({ email})
    if(!koderByEmail){
    //se ejecuta cuando no hay un koder
      throw  new Error('Email not found')
  }
  //verificar que si sea su password
  const isValid = await bcrypt.compare(passwordPlain,  koderByEmail.password)
  if(!isValid)
  throw new Error('Password not valid')

// Todo: create token 
  return jwt.sign({id: koderByEmail._id})
}

module.exports = {
getAll,
create,
findByIdAndDelete,
findByIdAndUpdate,
signup,
login,
}