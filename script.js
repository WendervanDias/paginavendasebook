document.addEventListener('DOMContentLoaded', function() {
    const comprarBtn = document.getElementById('comprar-btn');

    if (comprarBtn) {
        comprarBtn.addEventListener('click', function() {
            alert('Você será redirecionado para a página de compra do ebook.');
            window.location.href = 'https://go.hotmart.com/E96829934D';
        });
    } else {
        console.error('Botão com id "comprar-btn" não encontrado.');
    }
})






