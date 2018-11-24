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


let getEmpleado = (id) =>{
  let promise = new Promise((resolve, reject) =>{
    let empleadoDB = empleados.find(empleado => empleado.id == id)

    if(!empleadoDB){
      reject(`No existe el empleado con el ID ${id}`);
    }
    resolve(empleadoDB);
  })

  promise.then((response)=>{
    console.log('Empleado encontrado: ', response);
    
  }).catch((error)=>{
    console.log('Error: ',error);
  })
};


let getSalario = (id)=>{
  let salarioPromise = new Promise((resolve, reject)=>{
    let salarioDB = salarios.find(salario => salario.id == id)

    if(!salarioDB){
      reject(`No existe el salario asociado al id ${id}`)
    }
    resolve(salarioDB.salario);
  })

  salarioPromise.then((response)=>{
    console.log('Salario encontrado: $', response)
  }).catch((error)=>{
    console.log('Error: ', error);
  })
};


getEmpleado(2);
getSalario(2);


let getEmpleadoAsync = async(id)=>{
  let empleadoDB = empleados.find(empleado => empleado.id == id)

  if(!empleadoDB){
    throw new Error(`No existe el empleado con el ID ${id}`)

  }else{
    return empleadoDB;
  }

}


let getSalarioAsync = async(id)=>{
  let salarioDB = salarios.find(salario => salario.id == id)

  if(!salarioDB){
    throw new Error(`No existe el salario con el ID ${id}`)

  }else{
    return salarioDB;
  }

}
