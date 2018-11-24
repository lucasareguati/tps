
let empleados = [{
  id:1 ,
  nombre:'Lucas'
},{
  id:2 ,
  nombre:'Mateo'
},{
id:3 ,
nombre:'Martiniano'
}];

let salarios =[{
  id:1,
  salario: 1000
},{
  id:2,
  salario: 2000
}];

let getEmpleado = (id, callback) =>{
  let empleadoDB = empleados.find(empleado => empleado.id == id)

  if(!empleadoDB){
    callback(`No existe un empleado con el id ${id}`)
  }else{
    callback(null, empleadoDB);
  }
}

let getSalario = (id, callback)=>{
  let salarioDB = salarios.find(salario => salario.id == id)
    if(!salarioDB) {
      callback(`No existe el id ${id} asociado a un salario`)
    }else{
      callback(null, salarioDB);
    }
  }

getEmpleado(2, (err, empleado)=>{
  if(err){
    return console.log(err);
  }
  console.log(empleado);
});

getSalario(2, (err, salario) =>{
  if(err){
    return console.log(err);
  }else{
    console.log(salario);
  }
});
