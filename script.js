let num = document.getElementById("numero")
let lista = document.getElementById("lista")
let resposta = document.getElementById("resposta")
let vetor = []
let maior = 0
let menor = 0
let soma = 0
let media = 0

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } 
     else{
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
        if (Number(num.value) > maior){
            maior = Number(num.value)
        }else {
            menor = Number(num.value)
        }
        let item = document.createElement("option")
        item.text = `O número ${num.value} foi adicionado!`
        lista.appendChild(item)
        soma += Number(num.value)
        media = soma / vetor.length
    } 
    else{
        window.alert('Valor invalido ou já encontrado na lista.')
    }
}


function finalizar(){
    if (vetor.length == 0){
        window.alert("Por favor adicione um número antes!")
    } else{
        let tam = vetor.length

        resposta.innerHTML = ``
        resposta.innerHTML += `O total de número adicionados foi de ${tam}`
        resposta.innerHTML += `<br> O maior número adicionado foi ${maior}`
        resposta.innerHTML += `<br> O menor número adicionado foi ${menor}`
        resposta.innerHTML += `<br> A soma de todos os números é ${soma}`
        resposta.innerHTML += `<br> A média de todos os valores foi ${media}`
    }

}