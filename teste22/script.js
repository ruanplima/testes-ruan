function Clicar(){
    var n1 = document.getElementById ('one')
    var n2 = document.getElementById ('two')
    var n5 = document.getElementsByName ('operator')

    var $n1 = Number(n1.value)
    var $n2 = Number(n2.value)

    if(n5[0].checked){
        resultado.innerHTML = $n1 + $n2
    } else if(n5[1].checked){
        resultado.innerHTML = $n1 - $n2
    } else if(n5[2].checked){
        resultado.innerHTML = $n1 * $n2
    } else if (n5[3].checked){
        resultado.innerHTML = $n1 / $n2
    }

    if($n1 == '' || $n2 == ''){
        alert ('[ERRO] Verifique os dados e tente novamente!')
        resultado.innerHTML = '[ERRO] Preencha todos os campos.'
        resultado.style.color = 'red'
    } else{
        resultado.style.color = 'black'
    }
}