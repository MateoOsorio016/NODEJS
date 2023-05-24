 const formularioLogin = document.querySelector('#login')

formularioLogin.addEventListener('submit', e =>{
    e.preventDefault();
    const pattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    const email = document.querySelector('#user')
    const pass = document.querySelector('#pass')
    console.log(e)
    
        if(email === '' || pass === ''){
            Swal.fire({
                title: 'Error',
                text: 'Campos incompletos',
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
        }else if(pass.value.length < 8){
            Swal.fire({
                title: 'Error',
                text: 'La clave debe ser mayor de 8 digitos',
                icon: 'error',
                confirmButtonText: 'Aceptar',
              });
        }else{
            window.location.href='main'
        }
})