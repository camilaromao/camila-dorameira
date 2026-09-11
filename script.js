
// ANIMAÇÃO DE PETALAS //

function createPetal() {
  const container = document.getElementById('sakura-container');
  if (!container) return;

  const petal = document.createElement('div');
  petal.classList.add('petal');

  // Tamanho aleatório entre 10px e 20px
  const size = Math.random() * 10 + 10;
  petal.style.width = `${size}px`;
  petal.style.height = `${size * 1.3}px`;

  // Posição inicial horizontal aleatória (0% a 100%)
  petal.style.left = `${Math.random() * 100}%`;

  // Tempo de queda aleatório (entre 4s e 9s)
  const duration = Math.random() * 5 + 4;
  petal.style.animationDuration = `${duration}s`;

  // Tom de rosa levemente variado
  const colors = ['#ffb7c5', '#ffc0cb', '#ffe4e1', '#f8a5c2'];
  petal.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

  container.appendChild(petal);

  // Remove a pétala do DOM após a conclusão da animação
  setTimeout(() => {
    petal.remove();
  }, duration * 1000);
}

// Gera uma nova pétala a cada 300ms
setInterval(createPetal, 300);


// BANNER ANIMADO DE ABERTURA // 

window.addEventListener("load", () => {

    const video = document.getElementById("animacao-abertura");
    const preloader = document.getElementById("preloader");

    if (!video || !preloader) return;

    // Quando o vídeo terminar
    video.addEventListener("ended", () => {

        // Faz a tela desaparecer suavemente
        preloader.classList.add("escondido");

        // Remove o preloader depois da transição
        setTimeout(() => {
            preloader.remove();
        }, 800);

    });

});


window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");
    const video = document.getElementById("animacao-abertura");

    if (!preloader || !video) return;

    // Verifica se a pessoa está usando celular
    const celular = window.matchMedia("(max-width: 768px)").matches;

    // Escolhe o vídeo
    if (celular) {
        video.src = "assets/banner-celular.webm";
    } else {
        video.src = "assets/banner-desktop.webm";
    }

    // Começa o vídeo depois de definir o arquivo
    video.load();

    video.play().catch(() => {
        // Alguns navegadores podem bloquear o autoplay.
        // Como o vídeo está muted, normalmente funciona.
    });

    // Quando o vídeo terminar
    video.addEventListener("ended", () => {

        preloader.classList.add("escondido");

        // Remove a tela depois do fade
        setTimeout(() => {
            preloader.remove();
        }, 800);

    });

});