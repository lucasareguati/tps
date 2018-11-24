let promesa = new Promise((resolve, reject)=>{
  console.log('Pendiente...');
  setTimeout(()=>{
    resolve('Promesa resuelta correctamente');
  }, 3000);

  setTimeout(()=>{
    reject('Ocurrio un error');
  }, 2000);

});

promesa.then((response)=> {
  console.log('Response: ', response);
}).catch((error)=>{
  console.log('Error: ', error);
})
