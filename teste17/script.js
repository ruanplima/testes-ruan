    var e = document.getElementById ('email')
    var s = document.getElementById ('senha')
    var paragrafo = document.getElementById ('p')
    var formulario = document.getElementById ('form')

function verificador(){
    if (e.value == '' || s.value == ''){
        paragrafo.innerHTML = "[ERRO] Verifique se todos os campos estão preenchidos.";
    } else{
        form.reset();
        window.alert ('Dados enviados com sucesso!')
        paragrafo.innerHTML = '';
    }
}