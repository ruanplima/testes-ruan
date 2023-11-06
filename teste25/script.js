const password = document.querySelector('input[type="password"]')
const icon = document.querySelector('.fa-eye')

function mostrarOcultarSenha(){
    if(password.type == 'password'){
        password.setAttribute('type', 'text')
        icon.classList.replace('fa-eye', 'fa-eye-slash')
    } else{
        password.setAttribute('type', 'password')
        icon.classList.replace('fa-eye-slash', 'fa-eye')
    }
}


icon.addEventListener('click', mostrarOcultarSenha)