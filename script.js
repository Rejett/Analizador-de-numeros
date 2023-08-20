let num = document.getElementById("numero")
let lista = document.getElementById("lista")
let resposta = document.getElementById("resposta")
let vetor = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else{
        return false
    }
}
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, vetor)) {
        vetor.push(Number(num.value))
        let item = document.createElement("option")
        item.text = `O número ${num.value} foi adicionado!`
        lista.appendChild(item)
    } else{
        window.alert('Valor invalido ou já encontrado na lista.')
    }
}

var maior = 0
var menor = 0

for( n in vetor){
    if (n > maior){
        maior = n
    } else if (n < menor){
        menor = n
    }
    }


function finalizar(){
    if (vetor.length == 0){
        window.alert("Por favor adicione um número antes!")
    } else{
        let tam = vetor.length

        resposta.innerHTML = ``
        resposta.innerHTML += `O total de número adicionados foi de ${tam}`
    }

}