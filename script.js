// Este arquivo é usado por todas as páginas do portfólio.
// Cada parte só roda se o elemento dela existir na página.

// ===== MENU NO CELULAR =====
const menuBotao = document.getElementById('menuBotao');
const menuLinks = document.getElementById('menuLinks');

if (menuBotao && menuLinks) {
    menuBotao.addEventListener('click', function () {
        menuLinks.classList.toggle('aberto');
        menuBotao.classList.toggle('aberto');
        menuBotao.setAttribute('aria-expanded', menuLinks.classList.contains('aberto'));
    });

    // fecha o menu quando clica em um link
    menuLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            menuLinks.classList.remove('aberto');
            menuBotao.classList.remove('aberto');
            menuBotao.setAttribute('aria-expanded', 'false');
        });
    });
}

// ===== TEXTO SENDO DIGITADO (página inicial) =====
const textoDigitado = document.getElementById('textoDigitado');

if (textoDigitado) {
    const frases = [
        'Desenvolvedor Web em formação',
        'Apaixonado por tecnologia',
        'Sempre aprendendo algo novo'
    ];
    let fraseAtual = 0;
    let letraAtual = 0;
    let apagando = false;

    function digitar() {
        const frase = frases[fraseAtual];

        if (apagando) {
            letraAtual--;
        } else {
            letraAtual++;
        }

        textoDigitado.textContent = frase.substring(0, letraAtual);

        let tempo = apagando ? 40 : 90;

        if (!apagando && letraAtual === frase.length) {
            tempo = 1800; // espera um pouco antes de apagar
            apagando = true;
        } else if (apagando && letraAtual === 0) {
            apagando = false;
            fraseAtual = (fraseAtual + 1) % frases.length;
            tempo = 400;
        }

        setTimeout(digitar, tempo);
    }

    digitar();
}

// ===== MENU E BOTÃO "VOLTAR AO TOPO" AO ROLAR =====
const cabecalho = document.querySelector('.cabecalho');
const voltarTopo = document.getElementById('voltarTopo');

window.addEventListener('scroll', function () {
    if (cabecalho) {
        cabecalho.classList.toggle('rolando', window.scrollY > 50);
    }
    if (voltarTopo) {
        voltarTopo.classList.toggle('mostrar', window.scrollY > 500);
    }
});

if (voltarTopo) {
    voltarTopo.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ===== ANIMAÇÃO DOS ELEMENTOS AO APARECER NA TELA =====
const observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visivel');

            // enche a barra de habilidade
            const barra = entrada.target.querySelector('.barra-progresso');
            if (barra) {
                barra.style.width = barra.dataset.nivel + '%';
            }

            observador.unobserve(entrada.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.revelar').forEach(function (elemento) {
    observador.observe(elemento);
});

// ===== FORMULÁRIO DE CONTATO (página inicial) =====
const formulario = document.getElementById('formulario');
const aviso = document.getElementById('aviso');

if (formulario && aviso) {
    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault(); // não recarrega a página
        const nome = document.getElementById('nome').value.trim();
        aviso.textContent = 'Obrigado, ' + nome + '! Sua mensagem foi recebida.';
        formulario.reset();
    });
}

// ===== ANO NO RODAPÉ =====
const ano = document.getElementById('ano');

if (ano) {
    ano.textContent = new Date().getFullYear();
}
