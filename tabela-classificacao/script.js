var paulo = {
    nome: "Paulo",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0 
}
var rafa = {
    nome: "Rafa",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
}

paulo.pontos = calculaPontos(paulo)
rafa.pontos = calculaPontos(rafa)

function calculaPontos(jogador){
    var pontos = (jogador.vitorias * 3) + jogador.empates
    return pontos 
}

var jogadores = [rafa, paulo]

exibirJogadoresNaTela(jogadores)

function exibirJogadoresNaTela(jogadores){
    var html = ""
    for(var i = 0; i < jogadores.length; i++){
        html += "<tr><td>" + jogadores[i].nome + "</td>"
        html += "<td>" + jogadores[i].vitorias + "</td>"
        html += "<td>" + jogadores[i].empates + "</td>"
        html += "<td>" + jogadores[i].derrotas + "</td>"
        html += "<td>" + jogadores[i].pontos + "</td>"
        html += "<td><button onclick='adicionarVitoria(" + i + ")'>Vitória</button><td>"
        html +="<td><button onclick='adicionarEmpate()'>Empate</button><td>"
        html += "<td><button onclick='adicionarDerrota(" + i + ")'>Derrota</button><td></tr>"
    }
    var tabelaJogadores = document.getElementById('tabelaJogadores')
    tabelaJogadores.innerHTML = html
}

function adicionarVitoria(i){
    var jogador = jogadores[i]
    jogador.vitorias++
    if(jogador.nome == "Rafa"){
        jogadores[i + 1].derrotas++
    }else{
        jogadores[i - 1].derrotas++
    }
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
}

function adicionarEmpate(i){
     for(var i = 0; i < jogadores.length; i++){
       jogadores[i].empates++;
       jogadores[i].pontos += 1
     }
  exibirJogadoresNaTela(jogadores) 
}

function adicionarDerrota(i){
    var jogador = jogadores[i]
    jogador.derrotas++
    if(jogador.nome == "Rafa"){
        jogadores[i + 1].vitorias++
        jogadores[i + 1].pontos = calculaPontos(jogadores[i + 1])
    }else{
        jogadores[i - 1].vitorias++
        jogadores[i - 1].pontos = calculaPontos(jogadores[i - 1])
    }
    exibirJogadoresNaTela(jogadores) 
}

  