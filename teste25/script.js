const password = document.querySelector('input[type="password"]')
const icon = document.querySelector('.fa-eye')
const formulario = document.querySelector('form')
const btn = document.querySelector('button')
const nome = document.querySelector('input[type="text"]')
const email = document.querySelector('input[type="email"]')


function mostrarOcultarSenha(){
    if(password.type == 'password'){
        password.setAttribute('type', 'text')
        icon.classList.replace('fa-eye', 'fa-eye-slash')
    } else{
        password.setAttribute('type', 'password')
        icon.classList.replace('fa-eye-slash', 'fa-eye')
    }
}

function enviarForm(){
    if(password.value.length == '' || nome.value.length == ''
     || email.value.length == ''){
        alert('[ERRO] Preencha todos os campos corretamente')
        
    } else{
        password.removeAttribute('required')
        nome.removeAttribute('required')
        email.removeAttribute('required')
        nome.value = ''
        password.value = ''
        email.value = ''
        alert('Cadrasto realizado com sucesso')
    }
}


btn.addEventListener('click', enviarForm)
icon.addEventListener('click', mostrarOcultarSenha)
