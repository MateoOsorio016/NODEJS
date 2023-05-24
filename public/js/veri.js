

document.addEventListener('DOMContentLoaded', function() {
const formCliente = document.querySelector('#formClientes');
formCliente.addEventListener('submit', e => {
  e.preventDefault(); 

  const name = document.querySelector('#nombreC');
  const apellidos = document.querySelector('#apellidoC');
  const correo = document.querySelector('#emailC');
  const telefono = document.querySelector('#telefonoC');
  const pattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  const ExpRegSoloNumeros = /^[0-9]+$/;
  const validarNombre = /^[A-Z]+$/i;

  if (!name.value.match(validarNombre)) {
    Swal.fire({
      title: 'Error',
      text: 'Nombre Inválido',
      icon: 'error',
      confirmButtonText: 'Aceptar',
    });
  } else if (!apellidos.value.match(validarNombre)) {
    Swal.fire({
      title: 'Error',
      text: 'Apellidos Inválidos',
      icon: 'error',
      confirmButtonText: 'Aceptar',
    });
  } else if (!correo.value.match(pattern)) {
    Swal.fire({
      title: 'Error',
      text: 'Email Inválido',
      icon: 'error',
      confirmButtonText: 'Aceptar',
    });
  } else if (!telefono.value.match(ExpRegSoloNumeros)) {
    Swal.fire({
      title: 'Error',
      text: 'Número Inválido',
      icon: 'error',
      confirmButtonText: 'Aceptar',
    });
  } else {
    Swal.fire({
      title: 'Exitoso',
      text: 'Registrado con éxito',
      icon: 'success',
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      if (result.isConfirmed) {
        // Redirigir a una vista diferente
        window.location.href = 'clientes';
      }
    });
  }
});
});

/*const formularioproducto = document.querySelector('#productoform')

formularioproducto.addEventListener('submit', e =>{
    const validarNombre = /^[A-Z]+$/i
    e.preventDefault();
    const nombre = e.target.nombreP.value
    const id = e.target.idP.value
    let idP = document.querySelector('#idPv').value ;
    try{
        if(!validarNombre.test(nombre)){
            throw 'El nombre del prodcuto solo puede tener letras'
        }

        if(id === idP){
            throw 'El id no puede ser igual a un id existente'
        }

        if(pass.length < 8){
            throw 'La clave debe tener mas de 8 digitos'
        }
        window.location = 'main'
    }catch(err){
        alert(err)
    }
})*/