// Esse Codigo é para o carrossel da pagina inicial

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    if (index < 0) {
        index = slides.length - 1;
    } else if (index >= slides.length) {
        index = 0;
    }
    
    currentSlide = index;

    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

showSlide(0);

// Esse Cogigo é para o formulario 

const formulario = document.getElementById('form');
const mensagem = document.getElementById('mensagem');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    mensagem.innerHTML = 'Estaremos entrando em contato com você em breve!';
});



