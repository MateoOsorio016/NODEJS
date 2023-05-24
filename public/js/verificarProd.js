const formProductos= document.querySelector('#productoform');
formProductos.addEventListener('submit', e=>{
    e.preventDefault();
let nombre=document.querySelector('#nombreP');
let precio=document.querySelector('#precioP');
let stockM=document.querySelector('#stockM');
let stockm=document.querySelector('#stockm');
let categoria=document.querySelector('#categoria');
let cantidad=document.querySelector('#cantidad');
let fecha=document.querySelector('#fecha');


const validarNombre = /^[A-Za-z]+$/
const fecha2=new Date();
const fechaActualString = fecha2.toISOString().split('T')[0];

if(!nombre.value.match(validarNombre)){
    Swal.fire({
        title: 'Error',
        text: 'Nombre invalido',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });

}else if(stockM.value <= 0){
    Swal.fire({
        title: 'Error',
        text: 'Stock en 0',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });

}else if(stockm.value<stockM.value){
    Swal.fire({
        title: 'Error',
        text: 'Stock maximo invalido',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
}else if(cantidad.value <= 0){
    Swal.fire({
        title: 'Error',
        text: 'Cantidad en 0',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
}else if(precio.value <=0){
    Swal.fire({
        title: 'Error',
        text: 'Precio invalido',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
}else if(!categoria.value.match(validarNombre)){
    Swal.fire({
        title: 'Error',
        text: 'Categoria invalida',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
}else  if(fecha.value < fechaActualString){
    Swal.fire({
        title: 'Error',
        text: 'Fechas incorrectas',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
}else if(fecha.value > fechaActualString){
    Swal.fire({
        title: 'Error',
        text: 'Fechas incorrectas',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
}else{
    window.location.href="productos"
}
})