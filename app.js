<<<<<<< HEAD
let listaDeNumerosSorteados = [];
let numeroMaximo = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

{function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    if (campo) {
        campo.innerHTML = texto;
        if (typeof responsiveVoice !== 'undefined') {
            responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.1});
            } else {
                console.warn('responsiveVoice is not available.');
            }
        } else {
            console.error(`Element not found for selector: ${tag}`);
        }
    }
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', ' Boas Vindas ao Jogo do número secreto!');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroMaximo}:`);
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabéns! Você descobriu o número secreto!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        let reiniciarButton = document.getElementById('reiniciar');
        if (reiniciarButton) {
            reiniciarButton.removeAttribute('disabled');
        }
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', `O número secreto é menor que ${chute}`);
        } else {
            exibirTextoNaTela('p', `O número secreto é maior que ${chute}`);
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

if (quantidadeDeElementosNaLista == numeroMaximo) {
    listaDeNumerosSorteados = [];
}

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    let reiniciarButton = document.getElementById('reiniciar');
    if (reiniciarButton) {
        reiniciarButton.setAttribute('disabled', true);
    }
    exibirMensagemInicial();
    tentativas = 1;
}