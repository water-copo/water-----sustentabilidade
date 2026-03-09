// script.js - Aqui é onde a mágica acontece!

// ===== 1. MENU MOBILE =====
// Faz o menu funcionar no celular (abre e fecha)

// Seleciona os elementos do menu
const menuToggle = document.querySelector('.menu-toggle');
const menuLista = document.querySelector('.menu-lista');

// Adiciona evento de clique no botão do menu
menuToggle.addEventListener('click', () => {
    menuLista.classList.toggle('ativo');
    
    // Animação do ícone do menu (vira X quando aberto)
    const spans = menuToggle.querySelectorAll('span');
    spans.forEach(span => span.classList.toggle('ativo'));
});

// Fecha o menu quando clicar em um link (no celular)
const links = document.querySelectorAll('.menu-lista a');
links.forEach(link => {
    link.addEventListener('click', () => {
        menuLista.classList.remove('ativo');
    });
});

// ===== 2. BOTÃO EXPLORAR (Slide 1) =====
// Quando clicar, mostra uma mensagem e muda de cor

const botaoExplorar = document.getElementById('botaoExplorar');
let cliqueCount = 0;

botaoExplorar.addEventListener('click', function() {
    cliqueCount++;
    
    // Muda a cor do botão
    if (cliqueCount % 2 === 1) {
        // Clique ímpar: fica azul
        this.style.backgroundColor = '#3498db';
        this.style.color = 'white';
        this.textContent = 'Explorando... 🌍';
    } else {
        // Clique par: volta ao normal
        this.style.backgroundColor = 'white';
        this.style.color = '#27ae60';
        this.textContent = 'Explorar 🌱';
    }
    
    // Mostra uma mensagem
    alert('🌱 Você deu o primeiro passo para um futuro sustentável!');
});

// ===== 3. CARD INTERATIVO (Slide 3) =====
// Mostra/esconde um dado importante

const cardClimatico = document.getElementById('cardClimatico');
const dadoImportante = document.getElementById('dadoImportante');

// Inicia escondendo o dado
dadoImportante.style.display = 'none';

cardClimatico.addEventListener('click', function() {
    // Alterna a visibilidade do dado
    if (dadoImportante.style.display === 'none') {
        dadoImportante.style.display = 'block';
        this.style.backgroundColor = '#e8f4fd'; // Azul clarinho
    } else {
        dadoImportante.style.display = 'none';
        this.style.backgroundColor = 'white';
    }
});

// ===== 4. CARROSSEL (Slide 7) =====
// Faz o carrossel de cidades funcionar

let slideAtual = 0;
const slides = document.querySelectorAll('.carrossel-item');
const indicadores = document.querySelectorAll('.indicador');
const btnPrev = document.getElementById('carrosselPrev');
const btnNext = document.getElementById('carrosselNext');

// Função para mostrar o slide atual
function mostrarSlide(index) {
    // Remove a classe 'ativo' de todos os slides
    slides.forEach(slide => {
        slide.classList.remove('ativo');
    });
    
    // Remove 'ativo' de todos os indicadores
    indicadores.forEach(ind => {
        ind.classList.remove('ativo');
    });
    
    // Adiciona 'ativo' ao slide e indicador atual
    slides[index].classList.add('ativo');
    indicadores[index].classList.add('ativo');
}

// Botão próximo
btnNext.addEventListener('click', () => {
    slideAtual++;
    if (slideAtual >= slides.length) {
        slideAtual = 0; // Volta ao primeiro
    }
    mostrarSlide(slideAtual);
});

// Botão anterior
btnPrev.addEventListener('click', () => {
    slideAtual--;
    if (slideAtual < 0) {
        slideAtual = slides.length - 1; // Vai ao último
    }
    mostrarSlide(slideAtual);
});

// Clique nos indicadores (bolinhas)
indicadores.forEach((indicador, index) => {
    indicador.addEventListener('click', () => {
        slideAtual = index;
        mostrarSlide(slideAtual);
    });
});

// ===== 5. CONTADOR DE AÇÕES (Slide 8) =====
// Conta quantas ações sustentáveis você já faz

const btnContador = document.getElementById('contadorAcoes');
const mensagemContador = document.getElementById('mensagemContador');
const checkboxes = document.querySelectorAll('.acao-checkbox');

btnContador.addEventListener('click', () => {
    // Conta quantos checkboxes estão marcados
    let contador = 0;
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            contador++;
        }
    });
    
    // Mensagem personalizada baseada no progresso
    if (contador === 0) {
        mensagemContador.textContent = '🌱 Que tal começar com uma ação hoje?';
        mensagemContador.style.color = '#e74c3c'; // Vermelho
    } else if (contador <= 2) {
        mensagemContador.textContent = `👍 Você já faz ${contador} ação(ões)! Continue assim!`;
        mensagemContador.style.color = '#f39c12'; // Laranja
    } else if (contador <= 4) {
        mensagemContador.textContent = `🌟 Ótimo! Você já pratica ${contador} ações sustentáveis!`;
        mensagemContador.style.color = '#3498db'; // Azul
    } else {
        mensagemContador.textContent = `🏆 PARABÉNS! Você é um defensor do meio ambiente com ${contador} ações!`;
        mensagemContador.style.color = '#27ae60'; // Verde
    }
});

// ===== 6. SCROLL SUAVE =====
// Faz a rolagem até as seções ser suave ao clicar no menu

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== 7. EFEITO DE MUDANÇA DE COR NO SCROLL =====
// Muda a cor do menu quando rola a página

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 100) {
        header.style.background = 'linear-gradient(135deg, #27ae60, #2980b9)';
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.2)';
    } else {
        header.style.background = 'linear-gradient(135deg, var(--verde-principal), var(--azul-principal))';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// ===== 8. ANIMAÇÃO DE ENTRADA =====
// Elementos aparecem suavemente quando entram na tela

// Observador de interseção (detecta quando elemento está visível)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.2 // 20% do elemento visível
});

// Aplica a todas as seções
document.querySelectorAll('.secao').forEach(secao => {
    secao.style.opacity = '0';
    secao.style.transform = 'translateY(20px)';
    secao.style.transition = 'all 0.6s ease-out';
    observer.observe(secao);
});