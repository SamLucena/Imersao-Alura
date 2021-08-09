var primeiroValor = Number(prompt('Digite o primeiro valor:') )
var segundoValor = Number(prompt('Digite o segundo valor:') )

var operacao = prompt(' Digite 1 para fazer uma divisão\n Digite 2 para multiplicação\n Digite 3 para adição\n Digite 4 para subtração')

if(operacao == '1'){
   var conta = primeiroValor / segundoValor
   document.write(`<h2> ${primeiroValor} / ${segundoValor} = ${conta} </h2>`)
}else if(operacao == '2'){
   var conta = primeiroValor * segundoValor
   document.write(`<h2> ${primeiroValor} * ${segundoValor} = ${conta} </h2>`)
}else if (operacao == '3'){
   var conta = primeiroValor + segundoValor
   document.write(`<h2> ${primeiroValor} + ${segundoValor} = ${conta} </h2>`)
}else if (operacao == '4'){
   var conta = primeiroValor - segundoValor
   document.write(`<h2> ${primeiroValor} - ${segundoValor} = ${conta} </h2>`)
}else{
    document.write('<h2>Opção Inválida</h2>')
}
