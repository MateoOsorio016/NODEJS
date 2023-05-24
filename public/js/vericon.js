const form= document.querySelector('#formC')
form.addEventListener('submit', e=>{
    e.preventDefault();

    const numeroC=document.querySelector('#numerodecontrato');
    const empresa=document.querySelector('#empresa');
    const fechai=document.querySelector('#fechaini');
    const fechafin=document.querySelector('#fechafin');
    const frecue=document.querySelector('#fre')
    const prod=document.querySelector('#producto');
    const medida=document.querySelector('#medida'); 
    const cantidad=document.querySelector('#cantidad');
    const total=document.querySelector('#total');
    const iva=document.querySelector('#IVA');

    const validarNombre = /^[A-Za-z]+$/
    const fechas=new Date();
    const fechaActualString = fechas.toISOString().split('T')[0];
    
    

    if(numeroC.value <=0){
        Swal.fire({
            title: 'Error',
            text: 'Numero de contrato invalido',
            icon: 'error',
            confirmButtonText: 'Aceptar',
          });
    }else if(!empresa.value.match(validarNombre)){
        Swal.fire({
            title: 'Error',
            text: 'Nombre de empresa invalido',
            icon: 'error',
            confirmButtonText: 'Aceptar',
          });
    }else if(!prod.value.match(validarNombre)){
        Swal.fire({
            title: 'Error',
            text: 'Nombre de producto invalido',
            icon: 'error',
            confirmButtonText: 'Aceptar',
          });
    }else if(new Date(fechafin.value) < new Date(fechai.value)){
        Swal.fire({
            title: 'Error',
            text: 'fecha incorrecta, no puede ser menor a la fecha de inicio',
            icon: 'error',
            confirmButtonText: 'Aceptar',
          });
    }else if(fechai.value < fechaActualString){
        Swal.fire({
            title: 'Error',
            text: 'fecha incorrecta',
            icon: 'error',
            confirmButtonText: 'Aceptar',
          });
    }else if(!frecue.value.match(validarNombre)){
        Swal.fire({
            title: 'Error',
            text: 'Frecuencia de pago incorrecta',
            icon: 'error',
            confirmButtonText: 'Aceptar',
          });
    }else if(medida.value <= 0){
        Swal.fire({
            title: 'Error',
            text: 'Medida invalida',
            icon: 'error',
            confirmButtonText: 'Aceptar',
          });
    }else if(cantidad.value <= 0){
        Swal.fire({
            title: 'Error',
            text: 'Cantidad invalida',
            icon: 'error',
            confirmButtonText: 'Aceptar',
          });
    }else if(total.value <= 0){
        Swal.fire({
            title: 'Error',
            text: 'Precio invalido',
            icon: 'error',
            confirmButtonText: 'Aceptar',
          });
    }else if(iva.value <=0){
        Swal.fire({
            title: 'Error',
            text: 'IVA invalido',
            icon: 'error',
            confirmButtonText: 'Aceptar',
          });
    }else {
        Swal.fire({
          title: 'Exitoso',
          text: 'Registrado con éxito',
          icon: 'success',
          confirmButtonText: 'Aceptar',
        }).then((result) => {
          if (result.isConfirmed) {
            // Redirigir a una vista diferente
            window.location.href = 'contratos';
            }
          });
    }
})