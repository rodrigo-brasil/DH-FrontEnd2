let pontosJogador = 0;
let pontosComputador = 0;
const arr = [["pedra", "tesoura"], ["tesoura", "papel"], ["papel", "pedra"]]; // array de comparação
const jogadorGanhouPartida = (arrayEscolhasJogadorPc) => arr.some(item => item.toString() == arrayEscolhasJogadorPc.toString())
const validarEscolhaJogador = (escolhaDigitada) => ["pedra", "papel", "tesoura"].some(item => item == escolhaDigitada.toLowerCase())
const escolhasToArray = (escolhaJogador, escolhaPc) => new Array(escolhaJogador, escolhaPc)
const obterEscolhaAleatoria = () => {
    let valorAleatorio = Math.random(); // retorna um numero entre 0 e 1
    return valorAleatorio < 0.3 ? "pedra" : valorAleatorio < 0.6 ? "papel" : "tesoura"; //dividindo 1 em 3 partes para definar as opções;
}
// Loop do jogo quem fizer 3 pontos primeiro ganha
while (pontosJogador < 3 && pontosComputador < 3) {
    let valorEscolhido; //escolha do jogador

    do {
        valorEscolhido = prompt("Pedra, Papel ou Tesoura!");
    } while (!validarEscolhaJogador(valorEscolhido));

    let valorPC = obterEscolhaAleatoria()

    // se empatou
    if (valorEscolhido == valorPC) {
        alert("empatou");
        continue;
    }
    let jogadasArray = escolhasToArray(valorEscolhido, valorPC)
    //se ganhou
    if (jogadorGanhouPartida(jogadasArray)) {
        pontosJogador++; 
        alert("Você ganhou! total de pontos:" + pontosJogador)
    }
    //se perdeu
    else {
        pontosComputador++;
        alert("Computador Ganhou! total de pontos:" + pontosComputador)
    }
}
pontosJogador >= 3 ? alert("Você ganhou!") : alert(" Você perdeu!")
