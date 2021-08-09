var valorEmDolar = prompt("Qual é o valor em dolar que você quer converter?")
var valorEmDolarNumero = parseFloat(valorEmDolar)
var valorEmReal = valorEmDolarNumero * 5.65
var valorEmRealFixado = valorEmReal.toFixed(2)
alert(`O valor em é R$ ${valorEmRealFixado}`)
