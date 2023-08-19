var numero = document.getElementById("numero")
var lista = document.getElementById("lista")
var resultado = document.getElementById("resultado")
let vetor = []

function isnumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
}   
    else{
        return false
}
}

function inlista(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    }
    else{
        return false
    }
}

function adicionar(){
    if (isnumero(numero.value) && !inlista(numero.value, vetor) == true){
        window.alert("tudo ok!")
    } else{
        window.alert("Você já digitou esse valor, por favor, tente outro!")
    }
}

