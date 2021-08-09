
var numeroSecreto = parseInt(Math.random() * (10 - 0) + 0)
var tentativas = 3;
alert(numeroSecreto)


function verficaNumero(){
    while(tentativas > 0){
        var chute = window.prompt("Digite um número de 0 a 9:")    
        if(chute == numeroSecreto){
            alert('Você acertou!!!')
            break;
        }else if (chute > numeroSecreto){
            tentativas--
            alert("O número é menor...")
        }else{
            tentativas--
            alert("O número é maior...")
        }
    }
    if(chute != numeroSecreto){
       alert("O número era " + numeroSecreto);
    }
}
verficaNumero()
