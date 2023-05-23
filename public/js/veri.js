const formularioLogin = document.querySelector('#loginBurdeos')

formularioLogin.addEventListener('submit', e =>{
    const validarEmail = /[a-zA-Z0-9\_\.]*@[a-zA-Z09]*\.[a-zA-Z]{3,}/
    e.preventDefault();
    const email = e.target.email.value
    const pass = e.target.pass.value
    console.log(e)
    try{
        if(email === '' || pass === ''){
            throw 'Todos los campos son obligatorios'
        }

        if(!validarEmail.test(email)){
            throw 'Formato de email invalido'
        }

        if(pass.length < 8){
            throw 'La clave debe tener mas de 8 digitos'
        }
        window.location = 'main'
    }catch(err){
        alert(err)
    }
})
const formularioproducto = document.querySelector('#productoform')

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
})