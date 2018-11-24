
setTimeout( ()=>{
  console.log('Hola mundo');
}, 3000);


let getUsuarioById = (id, callback)=>{
  let usuario ={
    nombre:"Ernesto",
    id: "15"
  }

  if(id == 20){
    callback(`El usuario con id ${id}, no existe en la Base de Datos `);
  }else{
    callback(null, usuario);
  }
}


getUsuarioById(16, (err, usuario) =>{

  if (err){
    return console.log(err);
  }

  console.log('Usuario de base de datos', usuario);
});
