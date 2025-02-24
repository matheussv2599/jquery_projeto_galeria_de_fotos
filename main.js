$(document).ready(function(){  // - $ - (cifrão) usado para chamar o jquery 
    console.log(document.querySelector('header button'));
    console.log($('#botao-cancelar'));

    document.querySelector('header button').addEventListener('click', function(e) {

    })

    $('header button').click(function() {
        $('form').fadeIn();
    })

    $('#botao-cancelar').click(function() {
        $('form').fadeOut();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn();
        $('#endereco-imagem-nova').val("");
    })
})
