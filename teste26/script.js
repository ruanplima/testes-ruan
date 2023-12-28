const button = document.querySelector('.btn')

function somar(){
    const n1 = parseInt(document.getElementById('min').value)
    const n2 = parseInt(document.getElementById('max').value)
    const valor = document.querySelector('.generator')
    let result = Math.floor(Math.random() * (n2 - n1 + 1)) + n1

    if(isNaN(result) || (n1 == 0 && n2 == 0) || (n1 >= n2)){
        valor.textContent = 'ERRO'
        valor.style.color = 'red'
        valor.style.letterspacing = '2px'
    } else{
        valor.textContent = result
        valor.style.color = '#e7e7e7'
    }
}


button.addEventListener('click', somar)