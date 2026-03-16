// script.js - Interatividade do site Futuro Sustentável

// Aguarda o HTML carregar completamente antes de executar
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== MENU MOBILE =====
    // Seleciona os elementos do menu
    const menuToggle = document.querySelector('.menu-toggle');
    const menuLista = document.querySelector('.menu-lista');
    
    // Verifica se o botão existe na página
    if (menuToggle && menuLista) {
        // Quando clicar no botão do menu
        menuToggle.addEventListener('click', function() {
            menuLista.classList.toggle('active');  // Adiciona ou remove a classe 'active'
            
            // Muda o texto do botão (opcional)
            if (menuLista.classList.contains('active')) {
                menuToggle.textContent = '✕';  // Ícone de fechar
            } else {
                menuToggle.textContent = '☰';  // Ícone de menu
            }
        });
        
        // Fecha o menu ao clicar em um link
        const menuLinks = document.querySelectorAll('.menu-lista a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuLista.classList.remove('active');
                menuToggle.textContent = '☰';
            });
        });
    }
    
    // ===== BOTÃO INTERATIVO DA CAPA =====
    const botaoMensagem = document.getElementById('botaoMensagem');
    
    if (botaoMensagem) {
        botaoMensagem.addEventListener('click', function() {
            // Cria um elemento de mensagem
            const mensagem = document.createElement('div');
            mensagem.textContent = '🌱 Juntos por um futuro mais sustentável! 🌍';
            mensagem.style.position = 'fixed';
            mensagem.style.bottom = '20px';
            mensagem.style.left = '50%';
            mensagem.style.transform = 'translateX(-50%)';
            mensagem.style.backgroundColor = 'var(--verde-principal)';
            mensagem.style.color = 'white';
            mensagem.style.padding = '1rem 2rem';
            mensagem.style.borderRadius = '50px';
            mensagem.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
            mensagem.style.zIndex = '9999';
            mensagem.style.fontWeight = 'bold';
            mensagem.style.animation = 'slideUp 0.3s ease';
            
            // Adiciona a mensagem ao corpo da página
            document.body.appendChild(mensagem);
            
            // Remove a mensagem após 3 segundos
            setTimeout(function() {
                mensagem.remove();
            }, 3000);
        });
    }
    
    // ===== INTERATIVIDADE DOS CARDS =====
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        // Quando o mouse entra no card
        card.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#27ae60';  // Verde mais escuro
        });
        
        // Quando o mouse sai do card
        card.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';  // Volta ao normal (CSS cuida disso)
        });
        
        // Quando clica no card
        card.addEventListener('click', function() {
            // Pega o número do pilar (atributo data-pilar)
            const pilar = this.getAttribute('data-pilar');
            
            // Mensagens diferentes para cada pilar
            const mensagens = {
                '1': '🌿 Gestão responsável: usar recursos naturais sem esgotá-los',
                '2': '💡 Inovação: tecnologia a favor do meio ambiente',
                '3': '🤝 Responsabilidade social: inclusão e justiça para todos',
                '4': '🔄 Economia circular: reduzir, reutilizar e reciclar',
                '5': '📚 Educação: aprender para ensinar e transformar'
            };
            
            // Mostra um alerta com a mensagem correspondente
            alert(mensagens[pilar] || 'Pilar da sustentabilidade');
        });
    });
    
    // ===== EFEITO DE SCROLL SUAVE =====
    // Seleciona todos os links que começam com #
    const linksInternos = document.querySelectorAll('a[href^="#"]');
    
    linksInternos.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();  // Evita o comportamento padrão
            
            const href = this.getAttribute('href');  // Pega o destino do link
            const destino = document.querySelector(href);  // Encontra o elemento
            
            if (destino) {
                // Faz a rolagem suave até o destino
                destino.scrollIntoView({
                    behavior: 'smooth',      // Rolagem suave
                    block: 'start'           // Alinha no topo
                });
            }
        });
    });
    
    // ===== ANIMAÇÃO DE APARECER AO ROLAR (OPCIONAL) =====
    // Cria um observador para ver quando os elementos entram na tela
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1  // Ativa quando 10% do elemento está visível
    });
    
    // Aplica a observação para as seções de conteúdo
    const conteudos = document.querySelectorAll('.conteudo');
    conteudos.forEach(conteudo => {
        conteudo.style.opacity = '0';
        conteudo.style.transform = 'translateY(20px)';
        conteudo.style.transition = 'all 0.6s ease';
        observer.observe(conteudo);
    });
    
    // Também observa os cards
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
});
