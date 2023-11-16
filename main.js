// - Passar o mouse sobre o menu e mudar a cor

const meuLinks = document.querySelectorAll('.meuLink');

    meuLinks.forEach((link) => {
        const meuSVG = link.querySelector('svg');

        link.addEventListener('mouseenter', () => {
            meuSVG.style.fill = '#00e92a';
        });

        link.addEventListener('mouseleave', () => {
            meuSVG.style.fill = '#fff';
        });
    });

// barra de rolagem de pop-up

document.addEventListener("DOMContentLoaded", function() {
    // Exibe o pop-up quando a página é carregada
    document.getElementById("termosDeUso").style.display = "block";
});

function fecharPopup() {
    // Fecha o pop-up quando o botão de fechar é clicado
    document.getElementById("termosDeUso").style.display = "none";
    // Marque a caixa de seleção ao clicar em "Aceitar"
    document.getElementById('checkbox').checked = true;
    // Adicione o restante da sua lógica fecharPopup() aqui, se necessário
}

function recusarPopup() {
    // Adicione aqui o código que deseja executar ao clicar em "Recusar"
    // Neste exemplo, não fazemos nada além de esconder o popup
    document.getElementById('termosDeUso').style.display = 'none';
}

// alterar a imagem descartes quando passar o mouse

document.addEventListener("DOMContentLoaded", function() {
    const img = document.querySelector(".acesso-descartes-alt");

    img.addEventListener("mouseenter", function() {
        img.src = "./screen2/acesso-descartes-preto.png";
        img.style.opacity = 1;
    });

    img.addEventListener("mouseleave", function() {
        img.src = "./screen2/acesso-descartes-branco.png";
    });
});

// Alterar a imagem das opcoes do perfil

var links = document.querySelectorAll('.sessoes-perfil-opcoes a');
        var images = {}; // Armazena imagens pré-carregadas

        // Função para pré-carregar imagens
        function preloadImage(src) {
            var img = new Image();
            img.src = src;
            return img;
        }

        // Pré-carrega as imagens
        links.forEach(function(link) {
            var className = link.className;
            images[className] = preloadImage('./icons/' + className + '-verde.png');
        });

        // Adiciona eventos de hover
        links.forEach(function(link) {
            link.addEventListener('mouseover', function() {
                var img = this.querySelector('img');
                img.src = images[this.className].src;
            });

            link.addEventListener('mouseout', function() {
                var img = this.querySelector('img');
                img.src = './icons/' + this.className + '.png';
            });
        });

// Mudar a imagem ao passar no icone menu-voltar

var voltar = document.querySelectorAll('.menu-voltar a');
var voltarImages = {}; // Armazena imagens pré-carregadas

// Função para pré-carregar imagens
function preloadImage(voltarSrc) {
    var voltarImg = new Image();
    voltarImg.src = voltarSrc;
    return voltarImg;
}

// Pré-carrega as imagens
voltar.forEach(function(voltarLink) {
    var voltarImg = voltarLink.querySelector('img');
    var voltarClassName = 'voltar' + voltarImg.className; // Adiciona 'voltar' ao nome da classe
    voltarImages[voltarClassName] = preloadImage('./icons/' + voltarClassName.replace(/\s/g, '-') + '-verde.png');
});

// Adiciona eventos de hover
voltar.forEach(function(voltarLink) {
    var voltarImg = voltarLink.querySelector('img');

    voltarLink.addEventListener('mouseover', function() {
        voltarImg.src = voltarImages['voltar' + voltarImg.className].src;
    });

    voltarLink.addEventListener('mouseout', function() {
        voltarImg.src = './icons/voltar' + voltarImg.className.replace(/\s/g, '-') + '.png';
    });
});

// Visualizar senha

function togglePasswordVisibility() {
    var senhaInput = document.getElementById("senha");
    if (senhaInput.type === "password") {
        senhaInput.type = "text";
    } else {
        senhaInput.type = "password";
    }
}

function togglePasswordVisibility2() {
    var senhaInput2 = document.getElementById("senha2");
    if (senhaInput2.type === "password") {
        senhaInput2.type = "text";
    } else {
        senhaInput2.type = "password";
    }
}

// Estilização para numero de telefone

document.addEventListener("DOMContentLoaded", function() {
    var inputTelefone = document.getElementById("telefone");

    inputTelefone.addEventListener("input", function() {
        var valor = this.value.replace(/\D/g, ''); // Remove não dígitos
        
        if (valor.length === 0) {
            this.value = ''; // Limpa o campo se não houver números
        } else if (valor.length <= 2) {
            this.value = '(' + valor;
        } else if (valor.length <= 7) {
            this.value = '(' + valor.substring(0, 2) + ') ' + valor.substring(2);
        } else {
            this.value = '(' + valor.substring(0, 2) + ') ' + valor.substring(2, 7) + ' - ' + valor.substring(7);
        }
    });
});

// Puxar o horario do computador

function exibirHoraAtual() {
    var elementoHora1 = document.getElementById("hora-atual-1");
    var elementoHora2 = document.getElementById("hora-atual-2");
    var elementoHora3 = document.getElementById("hora-atual-3");

    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();    
    // var segundos = data.getSeconds(); 
    var horaFormatada = hora + ":" + (minutos < 10 ? '0' + minutos : minutos);
    //  + ":" + segundos;
    elementoHora1.textContent = horaFormatada;
    elementoHora2.textContent = horaFormatada;
    elementoHora3.textContent = horaFormatada;
    //  "Hora atual: " +
}

// Atualizar a hora a cada segundo
setInterval(exibirHoraAtual, 1000);

// Exibir a hora atual imediatamente
exibirHoraAtual();

// Alterar a foto no editar perfil

function mostrarImagemSelecionada(input) {
    // Lógica para exibir ou processar a imagem selecionada
    // Exemplo: exibir a imagem na página
    const preview = document.createElement("img");
    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        preview.src = e.target.result;
        document.body.appendChild(preview);
    };

    reader.readAsDataURL(file);
}

// alterar status da notificação e modo do tema

function alterarTexto(id, isChecked) {
    const elemento = document.getElementById(id);
    const subTitulo = elemento.querySelector('.sub-title');

    if (isChecked) {
        if (id === 'notificacoes') {
            subTitulo.textContent = 'Ligado';
        } else if (id === 'tema') {
            subTitulo.textContent = 'Claro';
            document.body.classList.add('dark-mode');
        }
    } else {
        if (id === 'notificacoes') {
            subTitulo.textContent = 'Desligado';
        } else if (id === 'tema') {
            subTitulo.textContent = 'Escuro';
            document.body.classList.remove('dark-mode');
        }
    }
}

// Carrossel das imagens de sustentabilidade

let currentIndex = 0;

function showImage(index) {
    const carousel = document.getElementById('imgCarousel');
    const imageWidth = carousel.clientWidth;
    currentIndex = index;
    carousel.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
}

function nextImage() {
    const totalImages = document.querySelectorAll('.img-content').length;
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
}

function prevImage() {
    const totalImages = document.querySelectorAll('.img-content').length;
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
}

// Adicione essa parte se quiser animação automática
// setInterval(() => {
//     nextImage();
// }, 3000); // Altere 3000 para o intervalo desejado em milissegundos (3 segundos neste exemplo)

// Slider da tela de pontos

var slider = document.getElementById("myRange");
    var points = document.getElementById("points");
    var percentage = document.getElementById("percentage");

    slider.oninput = function() {
      points.innerHTML = "VOCÊ POSSUI<br><span style='color: #00e92a;'>" + this.value + "</span><br>PONTOS";
      updatePercentage(this.value);
      updateSliderBackground();
    };

    function updatePercentage(value) {
      var discountPercentage = Math.min(value / 10, 100); // Limitado a 1000 pontos
      percentage.innerHTML = "Sua solicitação converterá<br>" + discountPercentage + "% de desconto";
    }

    function updateSliderBackground() {
      var percentageComplete = (slider.value - slider.min) / (slider.max - slider.min) * 100;
      var gradient = `linear-gradient(to right, #00e92a ${percentageComplete}%, #ddd ${percentageComplete}%, #ddd 100%)`;
      slider.style.background = gradient;
    }

    // Chama a função inicialmente para garantir que a cor seja configurada corretamente
    updateSliderBackground();