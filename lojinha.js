
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


// Produtos da lojinha 
const containerProdutos = document.getElementById('itens');

const listaProdutos = [
    {
        img: 'https://down-br.img.susercontent.com/file/sg-11134201-825au-mtmku1ttj4sqd7@resize_w450_nl.webp',
        estilo: 'Estilo dorama',
        nome: 'Blazer Feminino, Jaqueta Curta de Tweed',
        link: 'https://s.shopee.com.br/114eNPE9OY',
    },

    {
        img: 'https://down-br.img.susercontent.com/file/br-11134207-81z1k-mfdwlp9sunt0df@resize_w450_nl.webp',
        estilo: 'Estilo dorama',
        nome: 'Blazer Tweed Feminino Elegante Curto',
        link: 'https://s.shopee.com.br/1qdlJlBI9N',
    },

     {
        img: 'https://down-br.img.susercontent.com/file/br-11134207-820mf-mrsq7f0rhcef46@resize_w450_nl.webp',
        estilo: 'Estilo dorama',
        nome: 'Kit Lembrancinha Sabonete Natura e Toalha Com Chaveiro Mini Coração Dorama',
        link: 'https://s.shopee.com.br/BVXY4qTh2',
    },

    {
        img: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-lrt3nw7lkhff1f@resize_w450_nl.webp',
        estilo: 'Estilo dorama',
        nome: 'Camisa de Dorama - Dorama é minha Terapia',
        link: 'https://s.shopee.com.br/2gCsWodFxN',
    },

    {
        img: 'https://down-br.img.susercontent.com/file/sg-11134201-7rdyc-m1h2gpyei1zy5f@resize_w450_nl.webp',
        estilo: 'Estilo dorama',
        nome: 'Camisa Dorameira Doramas São A Minha Terapia Kdrama ',
        link: 'https://s.shopee.com.br/1gKLLCFTi7',
    },

    {
        img: 'https://down-br.img.susercontent.com/file/sg-11134201-825b7-mu7vl9fflbera6@resize_w450_nl.webp',
        estilo: 'Estilo Kpop',
        nome: 'Camisa de K-Pop Straykids szoo',
        link: 'https://s.shopee.com.br/1LhUdSy7Sb',
    },

    {
        img: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m6x0wcvu6e7b1b@resize_w450_nl.webp',
        estilo: 'Estilo kpop',
        nome: 'Capinhas Capa Stray Kids Domin Kpop Varios Modelos',
        link: 'https://s.shopee.com.br/Loxl1zwl5',
    },

      {
        img: 'https://down-br.img.susercontent.com/file/br-11134207-81ztk-mkmi0kvxmosh07@resize_w450_nl.webp',
        estilo: 'Estilo kpop',
        nome: 'Capinha Capa Celular personalizada Kpop/ Sua foto para Samsung/ Iphone/ Motorola/ Xiaomi/ Realme',
        link: 'https://s.shopee.com.br/8VAfU7bdVa',
    },

     {
        img: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m3hygelwlv7959@resize_w450_nl.webp',
        estilo: 'Estilo kpop',
        nome: 'Capa Capinha Personalizada Anti-Impacto - Coleção Enhypen K-pop ',
        link: 'https://s.shopee.com.br/7AfHtkIh63',
    },

     {
        img: 'https://down-br.img.susercontent.com/file/sg-11134201-8259p-mubf2sp4a51da3@resize_w450_nl.webp',
        estilo: 'Estilo kpop',
        nome: 'Garrafa Térmica De Água Inoxidável 304 Com Alça Portátil kpop Blackpink',
        link: 'https://s.shopee.com.br/7AfHtkIh63',
    },

    
];



function criarCard(produto) {
   const card = document.createElement('article');
card.classList.add('item-achadinho');

    card.innerHTML = `
        <img class="img-produto" src="${produto.img}" alt="Imagem ${produto.nome}">

        <div class="item-achadinho-info">
            <span class="badge-item nome-estilo">${produto.estilo}</span>

            <h3 class="nome-produto">${produto.nome}</h3>

            <a class="produto-link" href="${produto.link}" 
               target="_blank" rel="noopener noreferrer">
                Ver na Shopee
            </a>
        </div>
    `
    ;

    return card;
}

// Renderiza todos os produtos na tela
listaProdutos.forEach((produto) => {
    const cardElemento = criarCard(produto);
    containerProdutos.appendChild(cardElemento);
});
