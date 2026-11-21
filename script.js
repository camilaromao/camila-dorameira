// ANIMAÇÃO DE PÉTALAS
function createPetal() {
    const container = document.getElementById("sakura-container");
    if (!container) return;

    const petal = document.createElement("div");
    petal.classList.add("petal");

    const size = Math.random() * 10 + 10;
    petal.style.width = `${size}px`;
    petal.style.height = `${size * 1.3}px`;
    petal.style.left = `${Math.random() * 100}%`;

    const duration = Math.random() * 5 + 4;
    petal.style.animationDuration = `${duration}s`;

    const colors = ["#ffb7c5", "#ffc0cb", "#ffe4e1", "#f8a5c2"];
    petal.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    container.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, duration * 1000);
}

setInterval(createPetal, 300);
