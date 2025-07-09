// Aguarda o carregamento completo do DOM
$(document).ready(function() {

    // --- 1. Menu Responsivo (Menu Hamburger) ---
    const $menuBtn = $('#menu-btn');
    const $navbar = $('.navbar');

    $menuBtn.on('click', function() {
        $navbar.toggleClass('active');
    });

    $navbar.find('a').on('click', function() {
        if ($navbar.hasClass('active')) {
            $navbar.removeClass('active');
        }
    });

    $(document).on('click', function(e) {
        if (!$menuBtn.is(e.target) && !$navbar.is(e.target) && $navbar.has(e.target).length === 0) {
            $navbar.removeClass('active');
        }
    });


    // --- 2. Interatividade nos itens do menu (adicionar ao carrinho) ---
    $('.add-to-cart').on('click', function(e) {
        e.preventDefault(); // Impede o comportamento padrão do link (ir para #)

        const itemName = $(this).data('item');
        const itemPrice = $(this).data('price');

        alert(`"${itemName}" adicionado ao carrinho! Preço: R$ ${itemPrice.toFixed(2).replace('.', ',')}`);
    });

    // --- 3. Carrossel de Avaliações (Review Carousel) ---
    const $reviewItems = $('.review-item'); // Seleciona todos os slides
    let currentIndex = 0; // Começa no primeiro slide (índice 0)

    // Função para mostrar um slide específico
    function showSlide(index) {
        // Oculta todos os slides e remove a classe 'active-review'
        $reviewItems.css({
            'opacity': '0',
            'position': 'absolute', // Mantém os slides escondidos sobrepostos
            'z-index': '1' // Garante que fiquem abaixo
        }).removeClass('active-review');

        // Mostra o slide no índice atual, tornando-o visível e ajustando sua posição
        $reviewItems.eq(index).css({
            'opacity': '1',
            'position': 'relative', // Coloca o slide ativo no fluxo normal, ocupando espaço
            'z-index': '2' // Garante que ele esteja acima
        }).addClass('active-review'); // Adiciona a classe para CSS específico, se houver
    }

    // Inicializa o carrossel mostrando o primeiro slide ao carregar a página
    showSlide(currentIndex);

    // Evento de clique para o botão "Próximo"
    $('.next-btn').on('click', function() {
        currentIndex++; // Incrementa o índice
        // Se o índice ultrapassar o número total de slides, volta para o primeiro (0)
        if (currentIndex >= $reviewItems.length) {
            currentIndex = 0;
        }
        showSlide(currentIndex); // Mostra o slide correspondente ao novo índice
    });

    // Evento de clique para o botão "Anterior"
    $('.prev-btn').on('click', function() {
        currentIndex--; // Decrementa o índice
        // Se o índice for menor que 0 (primeiro slide), vai para o último slide
        if (currentIndex < 0) {
            currentIndex = $reviewItems.length - 1;
        }
        showSlide(currentIndex); // Mostra o slide correspondente ao novo índice
    });

    // Opcional: Auto-play do carrossel (descomente para ativar)
    /*
    setInterval(function() {
        $('.next-btn').click(); // Simula um clique no botão "próximo"
    }, 5000); // A cada 5 segundos (5000 milissegundos)
    */
});