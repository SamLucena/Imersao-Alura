function adicao(){
    var soma = Number(document.getElementById('primeiroNumero').value) + Number(document.getElementById('segundoNumero').value)
    alert('Resultado: ' + soma)
  }
  
  function subtracao(){
    var sub = Number(document.getElementById('primeiroNumero').value) - Number(document.getElementById('segundoNumero').value)
    alert('Resultado: ' + sub)
  }
  
  function multiplicacao(){
    var mult = Number(document.getElementById('primeiroNumero').value) * Number(document.getElementById('segundoNumero').value)
    alert('Resultado: ' + mult)
  }
  
  function divisao(){
    if(Number(document.getElementById('segundoNumero').value) == 0){
      alert('Não é possível dividir por zero')
    }else{
      var divisao = (Number(document.getElementById('primeiroNumero').value)) / (Number(document.getElementById('segundoNumero').value))
      alert('Resultado: ' + divisao)
    }
  }