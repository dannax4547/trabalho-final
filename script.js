// ===== FUNÇÕES DO SITE =====

// 1) Mostra o ano atual no rodapé
function mostrarAno() {
    const ano = document.getElementById('ano');
    ano.textContent = new Date().getFullYear();
}

// 2) Muda a saudação de acordo com a hora (só na página inicial)
function mostrarSaudacao() {
    const saudacao = document.getElementById('saudacao');
    if (!saudacao) return; // se não existir nesta página, não faz nada

    const hora = new Date().getHours();

    if (hora < 12) {
        saudacao.textContent = 'Bom dia! Eu sou';
    } else if (hora < 18) {
        saudacao.textContent = 'Boa tarde! Eu sou';
    } else {
        saudacao.textContent = 'Boa noite! Eu sou';
    }
}

// 3) Mostra ou esconde o texto extra quando clica no botão "Ler mais"
function alternarTexto() {
    const texto = document.getElementById('maisSobre');
    const botao = document.getElementById('botaoLerMais');

    texto.classList.toggle('escondido');

    if (texto.classList.contains('escondido')) {
        botao.textContent = 'Ler mais';
    } else {
        botao.textContent = 'Ler menos';
    }
}

// 4) Conta quantos feitos existem na página de jogos
function contarFeitos() {
    const total = document.getElementById('totalFeitos');
    if (!total) return;

    const feitos = document.querySelectorAll('.feito');
    total.textContent = feitos.length;
}

// 5) Mostra o botão "voltar ao topo" só depois de rolar a página
function mostrarBotaoTopo() {
    const botao = document.getElementById('voltarTopo');

    if (window.scrollY > 400) {
        botao.classList.remove('escondido');
    } else {
        botao.classList.add('escondido');
    }
}

// ===== CHAMANDO AS FUNÇÕES =====
mostrarAno();
mostrarSaudacao();
contarFeitos();
mostrarBotaoTopo();

window.addEventListener('scroll', mostrarBotaoTopo);

document.getElementById('voltarTopo').addEventListener('click', function () {
    window.scrollTo(0, 0);
});

const botaoLerMais = document.getElementById('botaoLerMais');
if (botaoLerMais) {
    botaoLerMais.addEventListener('click', alternarTexto);
}
