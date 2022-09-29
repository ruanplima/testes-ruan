function Verificar() {
    let $name = document.querySelector('#name')
    let $lastName = document.querySelector('#Lastname')
    let $email = document.querySelector('#email')
    let $password = document.querySelector('#password')
    let $form = document.getElementById('formulario')

    if (
        $name.value.length === 0 ||
        $lastName.value.length === 0 ||
        $email.value.length === 0 ||
        $password.value.length === 0


    ) {
        alert('[ERRO] Verifique se todos os campos estão preenchidos.')
        $form.addEventListener('submit', (event) => {
            event.preventDefault()
        })
    } else{
        alert('Formulário enviado com sucesso!')
        $form.reset()
        }
}
