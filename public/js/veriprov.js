const formProductos= document.querySelector('#formprov');
formProductos.addEventListener('submit', e=>{
    e.preventDefault();
let nombre=document.querySelector('#proveedor');
let email=document.querySelector('#proveedorE');
let telefono=document.querySelector('#telefonoP');
let factos=document.querySelector('#facturaP');
let cantidad=document.querySelector('#cantidadP');
let fecha=document.querySelector('#fechaP');

const pattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
const ExpRegSoloNumeros = /^[0-9]+$/;
const validarNombre = /^[A-Za-z]+$/
const fechas=new Date();
const fechaActualString = fechas.toISOString().split('T')[0];

if(!nombre.value.match(validarNombre)){
    Swal.fire({
        title: 'Error',
        text: 'Nombre invalido',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });


}else  if(fecha.value < fechaActualString || fecha.value > fechaActualString){
    Swal.fire({
        title: 'Error',
        text: 'Fechas incorrectas',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });

}else if(!email.value.match(pattern)){
    Swal.fire({
        title: 'Error',
        text: 'Email invalido',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
}else if(!telefono.value.match(ExpRegSoloNumeros)){
    Swal.fire({
        title: 'Error',
        text: 'Numero invalido',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
}else if(cantidad.value<=0){
    Swal.fire({
        title: 'Error',
        text: 'Cantidad invalida',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
}else if(factos.value==''){
    Swal.fire({
        title: 'Error',
        text: 'Complete los campos de la factura',
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
        window.location.href = 'proveedores';
        }
      });
}
});