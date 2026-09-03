

const form = document.querySelector("#form-busca");
const input = document.querySelector("#campo-busca");
const resultados = document.querySelector("#area-resultado");


// =====================================================
// 🎬 BANCO DE DORAMAS
// =====================================================

const doramas = [

    {
        titulo: "Um pouquinho de felicidade",

        genero: "Romance, comédia",

        imagem: "assets-cdrama/um-pouquinho-de-felicidade.jpg",

        sinopse: "Uma jovem procura por um amigo muito querido da infância, e nem imagina que ele pode estar bem mais perto do que imagina. Um doutor acaba tendo uma linda amizade com ela; de início são apenas bons amigos. Mas depois a amizade se transforma naquele doce e fofo romance que a gente gosta tanto.",

        plataforma: "Viki e AppleTv"
    },

  
    {
        titulo: "Love eternal",

        genero: "Fantasia, romance, drama",

        imagem: "assets-cdrama/love-eternal.jpg",

        sinopse: "Duas almas que se amam muito terão de lutar durante suas três vidas para viver este amor que passará por grandes provas. Desde o céu, sendo meros deuses, até no mundo dos mortais. Nada será tão fácil, apesar do amor; conflitos e questionamentos mostrarão se o amor supera as adversidades.",

        plataforma: "Netflix e Viki",
    } ,


    {
        titulo: "Regra do 80/20 do amor",

        genero: "Drama, comédia, romance",

        imagem: "assets-cdrama/regra-d- 80-20-do-amor.jpg",

        sinopse: "Uma advogada super renomada precisa se casar o mais rápido possível. Tudo porque corre o sério risco de perder seu cargo na empresa. Ela forja um casamento e agora precisa provar que tem um marido. Então, ela faz uma proposta a um rapaz que, de início, não topa, mas depois acaba cedendo ao trato. Com muitas cenas fofas e hilárias, é aquele drama para você curtir episódio a episódio — além de ter uma abertura muito boa também!",

        plataforma: "Viki, WeTv e AppleTv",
    } ,

     {
        titulo: "Em nome da flor",

        genero: "Drama, Histórico, Negócios, Romance",

        imagem: "assets-cdrama/em-nome-da-flor.webp",

        sinopse: "Uma jovem é obrigada a se casar e, ainda por cima, perde sua mãe. Se não bastasse passar pela perda dolorosa da mãe, ainda vai passar por um divórcio conturbado. Mas tudo o que ela deseja é se reerguer, cuidar das suas flores e empreender. Nisso ela é muito boa, mas toda vez que parece que vai dar certo, algo acontece. Mas um jovem rapaz vai ajudá-la com seu humilde negócio e, quem sabe, viver um novo amor.",

        plataforma: "Viki e iQIYI",
    } ,

    {
        titulo: "Todo mundo me ama",

        genero: "Drama, comédia, Romance",

        imagem: "assets-cdrama/todo-mundo-me-ama.jpg",

        sinopse: "Uma jovem vai conseguir seu sonhado emprego e nem imagina quem é o provável chefe: sim, seu ex-crush da época escolar! Agora ele que se cuide, pois ela promete tentar usar todo seu charme e beleza para conquistá-lo de vez. Muita confusão e cenas fofas aguardam por você.",

        plataforma: "Viki e Netflix",
    } ,


    {
        titulo: "Anjos caem às vezes",

        genero: "Drama, romance",

        imagem: "assets-cdrama/anjos-caem-as-vezes.jpg",

        sinopse: "Um jovem tinha a vida dos sonhos e estava conseguindo o amor que tanto sonhava. Porém, é diagnosticado com uma doença que não tem cura. Agora precisará reinventar a vida e viver ao máximo seus dias ao lado das pessoas que ama, além de ser exemplo para outros que também foram diagnosticados a procurarem ajuda e força nesta jornada.",

        plataforma: "Viki",
    } ,

     {
        titulo: "Vai, cara de lula",

        genero: "Comédia, romance",

        imagem: "assets-cdrama/vai-cara-de-lula.jpg",

        sinopse: "Uma jovem que administra a lan house da família e que ama jogos, em um dia como qualquer outro, recebe em seu estabelecimento o craque dos games. Agora tudo pode acontecer! Afinal, logo nesse primeiro encontro já percebemos a faísca de um provável romance fofinho.",

        plataforma: "Viki",
    } ,

    {
        titulo: "Ashes of Love",

        genero: "Romance, drama, fantasia",

        imagem: "assets-cdrama/ashes-of-love.jpg",

        sinopse: "Um casal muito apaixonado tenta viver esse romance no mundo dos deuses, apesar de forças malignas tentarem acabar com este amor. Passando por muitas provações, é aquele típico romance no estilo Romeu e Julieta, onde duas almas apaixonadas precisam vencer tudo para ficarem juntas.",

        plataforma: "Viki e Prime video",
    } ,

    {
        titulo: "Love in the clouds",

        genero: "Romance, drama, fantasia",

        imagem: "assets-cdrama/love-in-the-clouds.jpg",

        sinopse: "Uma jovem guerreira, após anos vencendo o torneio de guerreiros, acaba perdendo uma das batalhas. Percebendo que alguém pode ter fraudado sua luta, ela parte à procura do seu adversário, um guerreiro lendário, em busca de respostas. Usará de todo o seu charme para tentar seduzir este guerreiro e conseguir achar o amuleto precioso.",

        plataforma: "Viki e Netflix",
    } ,

    {
        titulo: "Os Segredos do Palácio Tang",

        genero: "Histórico, Misterio, Romance, drama, fantasia",

        imagem: "assets-cdrama/os-segredos-do-palacio-tang.jpg",

        sinopse: "Uma jovem busca respostas para os crimes que vêm acontecendo no palácio. Quem poderia estar cometendo tais mortes? Ela desconfia de todos à sua volta, até de um rapaz que também deseja, assim como ela, solucionar estes mistérios. Então, se unem em prol de resolver tais mistérios e viver um provável romance slow burn (lento)",

        plataforma: "Netflix",
    } ,

     {
        titulo: "Quando o destino desperta",

        genero: "Romance, fantasia, drama",

        imagem: "assets-cdrama/quando-o-destino-desperta.jpg",

        sinopse: "Uma jovem acaba viajando no tempo e vai parar dentro de um conto. Lá, ela é mandada para servir um temido demônio, super bonito e arrogante. A princípio, ela tenta de várias formas fugir, mas é impossível. O demônio fica caidinho por ela e fará de tudo para tê-la ao seu lado, custe o que custar.",

        plataforma: "Viki",
    } ,


    {
        titulo: "Por Você",

        genero: "Histórico, Romance, fantasia, drama",

        imagem: "assets-cdrama/por-voce.jpg",

        sinopse: "Uma jovem empreendedora acaba encontrando um guerreiro muito ferido. O pobre coitado foi abandonado no campo de batalha e agora ela vai cuidar do moço. Sem saber quem ele possa ser — mal sabe ela que ele provavelmente será seu futuro marido —, cuida dele enquanto administra seu negócio e cuida de sua irmã. Juntos, eles lutam por justiça enquanto seu futuro marido investiga quem está por trás de certos acontecimentos.",

        plataforma: "Netflix",
    } ,


    {
        titulo: "Fogos de artificio do meu coração",

        genero: "Romance, drama",

        imagem: "assets-cdrama/fogos-de-artificio-do-meu-coraçao.webp",

        sinopse: "Um casal que se amava demais na adolescência acaba separado devido a escolhas e à pressão da família, por serem de classes diferentes. Mas a vida vai fazer estes dois, agora já adultos, se reencontrarem, apesar das circunstâncias. Agora tudo pode acontecer: um lindo bombeiro de coração de pedra e orgulhoso vai ter seu coração amolecido pela brava e fofa médica.",

        plataforma: "Viki",
    } ,


    {
        titulo: "How Dare You!?",

        genero: "Romance, drama, fantasia",

        imagem: "assets-cdrama/how-are-you.jpg",

        sinopse: "Uma jovem acaba viajando para dentro do conto que acabou de ler; lá ela vai ser uma das concubinas de um temido imperador que, assim como ele, também caiu dentro da história. Dessa forma, ambos irão se unir para mudar o rumo da história. Muitas cenas super divertidas e fofas!",

        plataforma: "iQIYI",
    } ,


    {
        titulo: "A lenda da generala",

        genero: "Historico, guerra, Romance, drama",

        imagem: "assets-cdrama/a-lenda-da-generala.avif",

        sinopse: "Diante de injustiças, uma jovem guerreira decide virar a chave e fazer justiça contra quem lhe causou danos. Para isso, decide retornar ao pelotão, reencontrando o seu capitão amado. Juntos, enfrentarão grandes exércitos em busca de justiça. Bem no estilo Mulan, um drama sensacional do início ao fim!",

        plataforma: "Viki",
    } ,


      {
        titulo: "Amor e espada",

        genero: "Historico, Romance, drama",

        imagem: "assets-cdrama/amor-e-espada.jpg",

        sinopse: "Uma jovem, depois de ser sequestrada, é resgatada por um destemido e lindo cavaleiro. Depois disso, ela fica caidinha por ele, e aos poucos testemunhamos um lindo romance florescer. Uma jornada repleta de muita aventura e aquele romance com cenas que eu sei que você gosta!",

        plataforma: "Viki",
    } ,

     {
        titulo: "Moonlit reunion",

        genero: "Sobrenatural, Romance, drama",

        imagem: "assets-cdrama/moonlit-reunion.webp",

        sinopse: "Em uma época onde humanos e demônios se odeiam, uma jovem vive uma jornada dupla: de dia é uma simples princesa e à noite vira uma demônia gata, protegendo o reino e impedindo que as criaturas sejam tomadas por mãos ruins. Ela acaba seduzindo um jovem rapaz que ficará encantado e super curioso por ela. Só que ele é um caçador de demônios...imagina só a confusão!.",

        plataforma: "Viki",
    } ,


     {
        titulo: "Rattan",

        genero: "Sobrenatural, Romance, drama",

        imagem: "assets-cdrama/rattan.jpg",

        sinopse: "Um jovem sofre um terrível acidente e retorna dos mortos. Só que também acaba despertando um ser da floresta, tido como uma demônia, lindíssima e cheia de charme. Ela vai enlouquecer a vida deste jovem até fazê-lo ficar maluquinho por ela, além de desvendarem vários mistérios e quebra-cabeças.",

        plataforma: "Viki, Prime video, WeTv e iQIYI",
    } ,

 {
        titulo: "Um romance da pequena floresta",

        genero: "Romance, Comédia",

        imagem: "assets-cdrama/um-romance-da-pequena-floresta.jpg",

        sinopse: "Uma jovem vai gravar um vídeo em uma faculdade e, achando que o professor faz parte da encenação, acaba se metendo em uma confusão daquelas que eu sei que você gosta. Depois disso, ela vai seguir o professor e descobrir que ele é um crush por quem tem grandes sentimentos. O professor também não é bobo, apesar de no início parecer frio com ela.",

        plataforma: "Viki",
    } ,

     {
        titulo: "Das cinzas ao trono",

        genero: "Sobrenatural, Romance, vingança",

        imagem: "assets-cdrama/das-cinzas-ao-trono.png",

        sinopse: "Uma jovem sofre depois de fazer escolhas erradas e acaba tendo um fim trágico. Só que, depois disso, ganha a oportunidade no purgatório de voltar no tempo e se vingar das pessoas que causaram sua morte. Para completar, vai ganhar do destino um braço direito para ajudá-la a concretizar sua vingança: um jovem cavaleiro, corajoso e, ainda por cima, lindíssimo, que pretende mexer também com seus sentimentos.",

        plataforma: "Viki e Netflix",
    } ,

     {
        titulo: "Veu de sombras",

        genero: "Sobrenatural, drama, fantasia, romance",

        imagem: "assets-cdrama/veu-de-sombras.jpg",

        sinopse: "Em um universo repleto de caçadores e demônios, dois caçadores e duas raposas precisarão deixar as diferenças de lado para investigar quem pode estar por trás de tais mistérios. Desvendando esses mistérios e vivendo um romance lento, estes caçadores e raposas farão seu coração bater mais forte ao assistir.",

        plataforma: "Viki e Netflix",
    } ,

     {
        titulo: "Amor Entre Fada e Demônio",

        genero: "Sobrenatural, drama, fantasia, romance",

        imagem: "assets-cdrama/amor-entre-a-fada-e-o-demonio.webp",

        sinopse: "Uma fada acaba ficando ligada a um demônio, passando por muitas aventuras e aquelas típicas cenas fofas que amamos nos C-dramas. Muitas peças a serem encaixadas, um destino que os une e os separa... E aquela abertura pula-nunca (impulável) com uma trilha sonora emocionante!.",

        plataforma: "Viki e Netflix",
    } ,

    {
        titulo: "Filtro",

        genero: "Drama, fantasia, romance",

        imagem: "assets-cdrama/filter.jpg",

        sinopse: "Uma jovem que não vem conseguindo grandes oportunidades na sua carreira pensa que, se for mais bonita, talvez até consiga realizar o sonho de ser conhecida. Então, ela ganha uma pulseira que a faz ganhar várias faces. Com várias personalidades muito diferentes, vai se meter em muitas confusões e ainda mexer com o coração de um rapaz — coitado dele, viu! O drama tem uma linda mensagem sobre nós mesmos e a nossa beleza própria.",

        plataforma: "Viki",
    } ,

    {
        titulo: "Pais das maravilhas do amor",

        genero: "Drama, misterio, romance",

        imagem: "assets-cdrama/pais-das-maravilhas-do-amor.webp",

        sinopse: "Uma jovem vive como a famosa Mulan dentro dos campos de batalha. Não tem medo de ninguém e, nessa jornada repleta de lutas, ela conhece um jovem príncipe que não liga para status e poder. Juntos, aos poucos, vivem um romance lento em meio às batalhas no campo de guerra. Justiça é o sobrenome deles!",

        plataforma: "Viki",
    } ,

    {
        titulo: "Isqueiro e a princesa",

        genero: "Drama, romance, vida",

        imagem: "assets-cdrama/isqueiro-e-a-princesa.jpg",

        sinopse: "Um jovem rapaz e sua amada vivem a vida dos sonhos, até que um incidente acaba mudando a vida deles e os separando para sempre. Agora, já adultos, a vida vai uni-los de novo — agora juntos além dos códigos de programação. Um romance lento, super fofo, que nos mostra o quanto a vida é boa quando estamos junto de quem amamos.",

        plataforma: "Viki",
    } ,

    {
        titulo: "Quando voo em sua direção",

        genero: "Drama, romance, vida",

        imagem: "assets-cdrama/quando-voo-em-sua-direçao.webp",

        sinopse: "Imagina ter uma quedinha pelo aluno mais popular e gente boa da turma! Essa jovem ainda terá a chance de fazer amizade com ele e, aos poucos, conquistá-lo. E digo mais: viver um romance, amizade além dos portões do colégio. O típico C-drama que eu sei que você gosta!",

        plataforma: "Viki e Netflix",
    } ,

    {
        titulo: "Amor oculto",

        genero: "Drama, romance, vida",

        imagem: "assets-cdrama/amor-oculto.jpg",

        sinopse: "Uma jovem tem uma quedinha fofa pelo melhor amigo do seu irmão. De forma bem inocente, tudo vem a acontecer: o que começa com uma simples amizade vira um romance além dos estudos, para a vida. Com cenas cheias de melação, quem ama um romance fofinho vai amar!",

        plataforma: "Netflix",
    } ,

    {
        titulo: "Juntos aqui de novo",

        genero: "Drama, romance, comédia",

        imagem: "assets-cdrama/juntos-aqui-de-novo.jpg",

        sinopse: "Uma jovem volta para a China para trabalhar na empresa do avô, só que nem imagina quem está prestes a encontrar. Logo de cara tenta se esconder, pois o seu ex-crush trabalha lá. Agora, os sentimentos guardados vão reaparecer, e com cenas fofas e muito amadurecimento provarão que o amor pode vencer as adversidades.",

        plataforma: "Viki",
    } ,

];


// =====================================================
// 🃏 CRIAR OS CARDS AUTOMATICAMENTE
// =====================================================

function criarCard(dorama) {

    const card = document.createElement("article");

    card.classList.add("card-dorama");

    card.innerHTML = `

        <div class="poster-dorama">

            <img
                class="img-dorama"
                src="${dorama.imagem}"
                alt="Pôster ${dorama.titulo}"
            >

        </div>


        <h3 class="titulo-dorama">
            ${dorama.titulo}
        </h3>


        <p class="genero-dorama">
            ${dorama.genero}
        </p>


        <p class="sinopse-dorama">
            ${dorama.sinopse}
        </p>


        <p class="onde-assistir">
            Onde assistir: ${dorama.plataforma}
        </p>

    `;

    return card;
}


// =====================================================
// 🔎 MOSTRAR RESULTADOS
// =====================================================

function mostrarResultados(lista) {

    // Limpa os resultados anteriores
    resultados.innerHTML = "";


    // Cria cada card encontrado
    lista.forEach(dorama => {

        const card = criarCard(dorama);

        resultados.appendChild(card);

    });


    // Mostra a área
    resultados.classList.remove("escondido");
}


// =====================================================
// 🔍 SISTEMA DE BUSCA
// =====================================================

form.addEventListener("submit", function(evento) {

    evento.preventDefault();


    const textoBuscado = input.value
        .toLowerCase()
        .trim();


    // Campo vazio
    if (textoBuscado === "") {

        resultados.classList.add("escondido");

        return;
    }


    // Procura nos dados dos doramas
    const encontrados = doramas.filter(dorama => {

        const titulo = dorama.titulo.toLowerCase();

        const genero = dorama.genero.toLowerCase();

        const sinopse = dorama.sinopse.toLowerCase();


        return (

            titulo.includes(textoBuscado) ||

            genero.includes(textoBuscado) ||

            sinopse.includes(textoBuscado)

        );

    });


    // =================================================
    // RESULTADO ENCONTRADO
    // =================================================

    if (encontrados.length > 0) {

        mostrarResultados(encontrados);

    }


    // =================================================
    // NENHUM RESULTADO
    // =================================================

    else {

        resultados.classList.add("escondido");

        alert(
            "Nenhum dorama encontrado com essa vibe! " +
            "Tente buscar por: romance, comédia, fantasia, " +
            "sobrenatural, terror ou crime."
        );

    }

});