// Aguarda o carregamento completo do DOM
$(document).ready(function() {

    // Menu Responsivo (Menu Hamburger) 
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


    // Interatividade nos itens do menu (adicionar ao carrinho)
    $('.add-to-cart').on('click', function(e) {
        e.preventDefault(); 

        const itemName = $(this).data('item');
        const itemPrice = $(this).data('price');

        alert(`"${itemName}" adicionado ao carrinho! Preço: R$ ${itemPrice.toFixed(2).replace('.', ',')}`);
    });

    // Carrossel de Avaliações
    const $reviewItems = $('.review-item'); 
    let currentIndex = 0; 

    // Função para mostrar um slide específico
    function showSlide(index) {
        $reviewItems.css({
            'opacity': '0',
            'position': 'absolute', 
            'z-index': '1' 
        }).removeClass('active-review');

        // Mostra o slide no índice atual, tornando-o visível e ajustando sua posição
        $reviewItems.eq(index).css({
            'opacity': '1',
            'position': 'relative', 
            'z-index': '2'
        }).addClass('active-review'); 
    }

    // Inicializa o carrossel mostrando o primeiro slide ao carregar a página
    showSlide(currentIndex);

    // Evento de clique para o botão "Próximo"
    $('.next-btn').on('click', function() {
        currentIndex++; 
        // Se o índice ultrapassar o número total de slides, volta para o primeiro (0)
        if (currentIndex >= $reviewItems.length) {
            currentIndex = 0;
        }
        showSlide(currentIndex); // Mostra o slide correspondente ao novo índice
    });

    // Evento de clique para o botão "Anterior"
    $('.prev-btn').on('click', function() {
        currentIndex--; 
        // Se o índice for menor que 0 (primeiro slide), vai para o último slide
        if (currentIndex < 0) {
            currentIndex = $reviewItems.length - 1;
        }
        showSlide(currentIndex); // Mostra o slide correspondente ao novo índice
    });

    
    setInterval(function() {
        $('.next-btn').click(); // Simula um clique no botão "próximo"
    }, 5000); 

});