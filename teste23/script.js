function Verificar(){
    let $name = document.querySelector('#name')
    let $lastName = document.querySelector('#Lastname')
    let $email = document.querySelector('#email')
    let $password = document.querySelector('#password')
    let $foot = document.querySelector('.foot')

    if(
        $name.value.length === 0
    ){
        $foot.innerHTML += '<p>ERRO</p>'
    }
}