function adicionarFilme(){
    var campoDoFilme = document.querySelector("#filme")
    var filmeFavorito = campoDoFilme.value
    if(filmeFavorito.endsWith(".jpg")){
      listarFilmesNaTela(filmeFavorito)
    }else{
      alert('ERRO: Insira o ENDEREÇO da imagem')
    }
    campoDoFilme.value = ""
  }
  function listarFilmesNaTela(filme){
    var listaFilmes = document.querySelector('#listaFilmes')
    var elementoFilme = "<img src=" + filme + ">" 
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
  }