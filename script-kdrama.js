

const form = document.querySelector("#form-busca");
const input = document.querySelector("#campo-busca");
const resultados = document.querySelector("#area-resultado");


// =====================================================
// 🎬 BANCO DE DORAMAS
// =====================================================

const doramas = [

    {
        titulo: "Meu Mafioso Predileto",

        genero: "Romance, comédia",

        imagem: "assets-kdrama/meu-mafioso-predileto.jpg",

        sinopse:
            "Um ex-mafioso acaba reencontrando um antigo amor de infância, que fará seu coração — e o nosso — bater ainda mais forte. Muitas cenas fofas e hilárias, aguardam por você.",

        plataforma: "Viki"
    },


    {
        titulo: "Juíza do Inferno",

        genero: "Crime, terror, fantasia",

        imagem: "assets-kdrama/a-juiza-do-inferno.jpg",

        sinopse:
            "Uma diaba acaba cometendo um erro gravíssimo ao julgar uma alma inocente no inferno. Agora, será enviada para a Terra para caçar e arrastar para o inferno as almas mais perversas.",

        plataforma: "Disney Plus"
    },


    {
        titulo: "Assustadoramente Apaixonados",

        genero: "Drama, fantasia, romance",

        imagem: "assets-kdrama/assustadoramente-apaixonados.webp",

        sinopse:
            "Uma jovem milionária vê fantasmas e vive sempre com medo. Mas um policial nada covarde vai ajudá-la. Juntos, eles vão desvendar crimes e viver um romance do jeitinho que a gente gosta.",

        plataforma: "Netflix"
    },


    {
        titulo: "O Palácio Assombrado",

        genero: "Sobrenatural, comédia romântica",

        imagem: "assets-kdrama/o-palacio-assombrado.webp",

        sinopse:
            "Uma jovem entra em um palácio repleto de fantasmas. Ela enfrentará essas criaturas e ajudará o rei e seu primeiro amor, que foi possuído por uma entidade, a se libertarem desses fantasmas. Cenas assustadoras, outras nem tanto, e algumas hilárias e fofas.",

        plataforma: "Viki"
    },


    {
        titulo: "Meu Homem é um Cupido",

        genero: "Comédia romântica, fantasia",

        imagem: "assets-kdrama/meu-homem-e-um-cupido.jpg",

        sinopse:
            "Uma jovem sofre de uma maldição em que quem se apaixona por ela acaba morrendo. Ela contará com a ajuda de um cupido para quebrar essa maldição, mas, no meio dessa jornada, sentimentos começam a surgir.",

        plataforma: "Prime Video"
    },


    {
        titulo: "Posso Ajudar?",

        genero: "Drama, fantasia, sobrenatural",

        imagem: "assets-kdrama/posso-ajudar.jpg",

        sinopse:
            "Uma jovem com um dom especial consegue ver fantasmas e realizar o último desejo das pessoas após falecerem. Trabalhando em uma funerária, ela vive amizades, um romance fofo e muitos momentos emocionantes.",

        plataforma: "Prime Video"
    },


    {
        titulo: "O Estúdio da Meia-Noite",

        genero: "Drama, fantasia, sobrenatural",

        imagem: "assets-kdrama/o-estudio-da-meia-noite.jpg",

        sinopse:
            "Uma jovem advogada endividada acaba dividindo o quintal com um jovem que possui um estúdio especial, onde são registradas as últimas fotos das pessoas que faleceram antes de seguirem para a vida eterna.Juntos, vão cuidar dessas almas e nos emocionar episódio após episódio.",

        plataforma: "Viki"
    },


    {
        titulo: "Hotel del luna",

        genero: "Drama, fantasia, sobrenatural",

        imagem: "assets-kdrama/hotel-del-luna.webp",

        sinopse: "Uma jovem administra um hotel muito especial, onde as almas se hospedam antes de resolverem suas pendências e seguirem para a vida eterna. Solucionando esses mistérios, um novo funcionário chega ao hotel, já querendo ir embora.Mas, ao conviver com as pessoas e com a dona do hotel, ele acaba se apaixonando por ela, vivendo um lindo e assustador romance.",

        plataforma: "Viki e Netflix",
    } ,

    
    {
        titulo: "venda sua casa assombrada",

        genero: "Drama, fantasia, sobrenatural",

        imagem: "assets-kdrama/venda-sua-casa-assombrada.jpg",

        sinopse: "Uma jovem administra uma imobiliária bem diferentona, que compra imóveis assombrados. Ela faz tanto sucesso nos negócios que acaba atraindo alguns curiosos, que pensam que ela é apenas uma charlatona. Porém, eles vão cair do cavalo! Acabam vivendo fortes emoções ao lado dela durante essa jornada repleta de mistérios e sustos.",

        plataforma: "Viki, Kocowa e Netflix",
    } ,


     {
        titulo: "Bloody flower",

        genero: "Crime, Suspense",

        imagem: "assets-kdrama/bloody-flower.jpg",

        sinopse: "Um jovem médico descobre uma forma de cura para o câncer, só que isso acaba causando várias mortes. Agora condenado e prestes a cumprir sua pena, um policial precisa dele para tentar salvar sua filha.Mas a promotora casca-grossa não pretende deixar seus crimes passarem impunes. Será que ele realmente encontrou a cura? Só assistindo para descobrir!",

        plataforma: "Disney plus e Kocowa",
    } ,

    {
        titulo: "Traição e redenção",

        genero: "Crime, Suspense, vingança",

        imagem: "assets-kdrama/traiçao-e-redençao.jpg",

        sinopse: "Uma jovem médica superdotada acaba, da noite para o dia, perdendo sua licença. Então, decide realizar certas cirurgias ilegais. Nessa jornada, acaba reencontrando seu antigo professor, que vai acabar mexendo ainda mais com seus nervos. Agora, vingança é tudo o que ela consegue enxergar!",

        plataforma: "Disney plus",
    } ,

    {
        titulo: "Terra do Ouro",

        genero: "Crime, suspense, drama",

        imagem: "assets-kdrama/terra-do-ouro.jpg",

        sinopse: "Uma jovem, acidentalmente, acaba encontrando uma fortuna em barras de ouro dentro de um caixão. Só que agora sua vida parece estar correndo perigo. Isso porque os prováveis donos do ouro querem recuperá-lo a todo custo.Lutando pela sua sobrevivência e fugindo dos possíveis vilões, ela vai se envolver em uma trama cheia de tensão e mistério. Este é um suspense criminal muito bom!",

        plataforma: "Disney plus",
    } ,

    {
        titulo: "A Coroa Perfeita",

        genero: "Drama, Comédia romantica",

        imagem: "assets-kdrama/a-coroa-perfeita.webp",

        sinopse: "Uma milionária precisa se casar para manter o cargo na sua renomada empresa. Caso contrário, seu pai vai tirá-la da presidência. Então, a jovem sai à procura do pretendente perfeito, alguém à altura dela. É aí que surge, nessa procura, um jovem príncipe.O rapaz é um colírio de tão bonito, mas não é levado a sério pela própria família. No início, ele não topa, mas depois acaba sendo cativado por ela. Muitas cenas melosas e fofas! Se você ama comédia romântica com muita melação, vai gostar! ",

        plataforma: "Disney plus",
    } ,


    {
        titulo: "Os SUPERtontoss",

        genero: "Drama, Comédia, fantasia",

        imagem: "assets-kdrama/os-supertontos.jpg",

        sinopse: "Depois de um sequestro malsucedido, uma jovem e seus companheiros acabam ganhando dons pra lá de especiais. Cada um mais atrapalhado que o outro, com superpoderes, imagina a confusão em que eles vão se meter! Além de aprenderem a lidar com seus poderes, também vão precisar enfrentar um time do mal que não está para brincadeira. Pensa em um drama cheio de cenas hilárias e algumas de tirar o fôlego. Simplesmente viciante, viu!",

        plataforma: "Netflix",
    } ,

     {
        titulo: "O rei de porcelana",

        genero: "Drama, historico, romance",

        imagem: "assets-kdrama/rei-de-porcelana.jpg",

        sinopse: "Depois da morte repentina do príncipe herdeiro, sua irmã gêmea toma o lugar dele. Ela passa por uma jornada superelétrica para tentar descobrir quem, de fato, o matou, enquanto esconde sua verdadeira identidade e os sentimentos que sente por um fiel cavaleiro que vive ali no palácio. Pensa em um drama sensacional do início ao fim! Ele levou até o Emmy de 2022!",

        plataforma: "Netflix",
    } ,


    {
        titulo: "Bate coração",

        genero: "Drama, romance, comedia, fantasia",

        imagem: "assets-kdrama/bate-coraçao.jpg",

        sinopse: "Uma jovem se muda para uma casa e, ao fazer uma varredura no local, acaba dando de cara com um caixão e, dentro dele, um vampiro. Imagina o susto! E tem mais: o vampiro sonha em se tornar humano para viver e sentir o que os humanos sentem. O que ele e a jovem não sabem é que estão prestes a viver um romance de outro mundo.",

        plataforma: "Prime video",
    } ,

{
        titulo: "Fiel ao amor",

        genero: "Drama, romance, comedia",

        imagem: "assets-kdrama/fiel-ao-amor.jpg",

        sinopse: "Uma escritora de livros de conselhos amorosos acaba descobrindo que seu atual companheiro está traindo ela. Assim, perde o chão e se pergunta: como continuar falando sobre romance e dando conselhos amorosos depois disso? Mas, depois dessa dolorosa situação, a vida acaba tirando algumas pessoas do nosso caminho e colocando as certas no lugar. E, quem sabe, surge um possível novo amor, muito diferente do traste do seu ex-noivo. Muitas cenas fofas e emocionantes esperam por você!",

        plataforma: "Prime video",
    } ,


    {
        titulo: "O jogo da morte",

        genero: "Fantasia, crime, misterio, suspense",

        imagem: "assets-kdrama/jogo-da-morte.jpg",

        sinopse: "Já aviso: o drama pode ter gatilhos! Um jovem deprimido acaba tirando a própria vida e vai parar no purgatório, onde será sentenciado pela sua morte. Agora, terá que voltar várias vezes à vida, vivendo como outras pessoas e tentando sobreviver nessas novas vidas.O drama faz a gente repensar sobre a vida, as pessoas ao nosso redor e como nossas escolhas têm consequências.",

        plataforma: "Prime video",
    } ,

    {
        titulo: "A fada e o pastor",

        genero: "Fantasia, romance, misterio",

        imagem: "assets-kdrama/a-fada-e-o-pastor.jpg",

        sinopse: "Uma jovem xamã procura pela sua cara-metade, um amor de verdade. Após uma visita, eis que parece ter encontrado seu grande amor. Só que agora precisará lutar contra fantasmas, que querem, de todas as formas, tirar a vida do seu amado. Muitas cenas hilárias, assustadoras e fofas te aguardam!",

        plataforma: "Prime video",
    } ,

    {
        titulo: "A primeira noite com o Duque",

        genero: "Fantasia, romance, misterio",

        imagem: "assets-kdrama/a-primeira-noite-com-o-duque.webp",

        sinopse: "Uma jovem escritora acaba viajando para dentro do seu conto histórico. Lá, acaba encontrando um jovem duque, que promete mexer com seu coração e com o nosso. Cenas maravilhosas e fofas, além de tentar mudar o rumo e o final da história.",

        plataforma: "Viki",
    } ,

    {
        titulo: "Seguro de divorcio",

        genero: "Drama, romance, comedia",

        imagem: "assets-kdrama/seguro-de-divorcio.jpg",

        sinopse: "Um rapaz muito criativo cria vários tipos de seguros, mas nem todos fazem sucesso ou entram em vigor na empresa. Até que ele tem a brilhante ideia de criar um seguro para pessoas que passam por um divórcio. Junto com sua equipe, trabalha duro para fazer com que seu projeto finalmente entre em vigor. Muitas cenas fofas e hilárias, e uma equipe muito divertida e querida aguarda por você!",

        plataforma: "Prime video",
    } ,

    {
        titulo: "Febre de primavera",

        genero: "Drama, romance, comedia",

        imagem: "assets-kdrama/febre-de-primavera.jpg",

        sinopse: "Aquela típica comédia romântica gostosinha! Uma jovem professora, fugindo do caos da sua antiga escola, se muda para uma cidade, um vilarejo pacato. Lá, encontra o tio de um dos alunos, que é um charme. Ele é lindo que só e vai acabar mexendo com seus sentimentos. No início, ela acha que ele faz parte de uma gangue, mas, no fim, percebe que ele tem um coração enorme e, na verdade, é um empreendedor.",

        plataforma: "Prime video",
    } ,

    {
        titulo: "A minha ladra querida",

        genero: "Drama, romance, comedia , misterio",

        imagem: "assets-kdrama/a-minha-ladra-querida.jpg",

        sinopse: "Uma jovem vive como o famoso Robin Hood. Durante o dia, é uma simples enfermeira que trabalha em prol das pessoas necessitadas e, à noite, veste sua capa e sai fazendo justiça. Só que, durante uma dessas noites, acaba dando de cara com um jovem supercharmoso. Ele é, na verdade, um jovem príncipe, que acaba até tendo um beijo roubado por essa ladra. Para quem curte dramas repletos de mistério e romance, precisa assistir!.",

        plataforma: "Viki",
    } ,

    {
        titulo: "A parceira ideal",

        genero: "Drama, drama juridico, Comédia",

        imagem: "assets-kdrama/a-parceira-ideal.jpg",

        sinopse: "Uma advogada superdedicada à carreira e muito famosa por sempre vencer os processos que trata no tribunal. Ela não imagina que está prestes a vivenciar o que seus clientes já passaram: sim, o temido divórcio! Só que ela contrata seu braço direito no escritório para cuidar dessa situação e ajudá-la a vencer nos tribunais. Uma jornada nada fácil, emocionante e supertocante.",

        plataforma: "Viki",
    } ,

    {
        titulo: "A lição",

        genero: "Drama, vingança, suspense, terror",

        imagem: "assets-kdrama/a-liçao.webp",

        sinopse: "Atenção: este drama pode ter gatilhos! Uma jovem passa pela situação mais triste que qualquer pessoa poderia enfrentar na época escolar: o temido bullying. Ela cresce arquitetando uma vingança impecável contra seus agressores. Aos poucos, coloca seu plano em ação, fazendo a gente torcer demais por ela a cada episódio.",

        plataforma: "Netflix",
    } ,

    {
        titulo: "Apreendendo a lição",

        genero: "Drama, escolar, Comédia",

        imagem: "assets-kdrama/aprendendo-a-licao.webp",

        sinopse: "Aviso: o drama pode ter gatilhos! Um grupo de famosos inspetores promete fazer qualquer aluno entrar na linha, seja apenas com diálogo ou utilizando outros métodos. Afinal, existem alunos que, mesmo com conselhos e advertências, parecem não querer obedecer aos professores e ao diretor da escola.E não são apenas os alunos que vão precisar entrar na linha: pais que passam dos limites também vão acabar enfrentando esse time!",

        plataforma: "Netflix",
    } ,

    {
        titulo: "Sorriso real",

        genero: "Drama, comedia romantica",

        imagem: "assets-kdrama/sorriso-real.webp",

        sinopse: "Uma jovem supersimpática é a funcionária que todo patrão gostaria de ter em seu hotel. Com seu sorriso e carisma, ela cativa qualquer pessoa e é supergenerosa com todos ao seu redor.Ela vai acabar conquistando até o filho do presidente, que tem medo de sorrisos. Ele desconfia de todos à sua volta, mas com ela será diferente. Este é o típico romance que eu sei que você gosta!",

        plataforma: "Netflix",
    } ,

    {
        titulo: "A pousada romantica secreta",

        genero: "Drama, historico, romance, comedia, misterio",

        imagem: "assets-kdrama/a-pousada-romantica-secreta.jpg",

        sinopse: "Uma jovem empreendedora administra a herança deixada por seus pais: uma famosa pousada onde jovens que estão prestes a ingressar na guarda do palácio se hospedam.Um desses bravos cavaleiros acaba chamando muito a sua atenção, a ponto de despertar sentimentos. E ele também fica caidinho pela nossa jovem empreendedora. Os dois vão viver um fofo romance em meio a uma jornada repleta de mistérios.",

        plataforma: "Viki",
    } ,

    {
        titulo: "A pousada Yongcheonru",

        genero: "Drama, historico, Misterio, vingança",

        imagem: "assets-kdrama/a-pousada-yongcheonru.jpg",

        sinopse: "Uma jovem cresceu sedenta por vingança, à procura de uma chave que pode devolver a ela tudo o que foi tomado quando seu pai faleceu. Agora, ela consegue entrar na pousada super-renomada, disfarçada como um jovem rapaz. Lá, acaba fazendo muitas amizades e vivendo um romance com um jovem que também está disfarçado e, coincidentemente, também está à procura da tal chave. Fala sério, se isso não é o destino querendo vê-los juntos!",

        plataforma: "Viki",
    } ,


    {
        titulo: "O Príncipe Herdeiro Desaparecido",

        genero: "Misterio, comedia, romance",

        imagem: "assets-kdrama/o-principe-herdeiro-desaparecido.jpg",

        sinopse: "Um palácio cheio de segredos acaba colocando um jovem príncipe na mira de uma das senhoras do palácio, que quer vê-lo morto após ele descobrir um segredo tenebrosoAgora, ele foge do palácio e se esconde, tentando encontrar uma forma de voltar e cumprir sua jornada como futuro herdeiro da coroa.No caminho, conhece uma jovem muito destemida, que vai acompanhá-lo nessa jornada repleta de mistérios, comédia e romance.",

        plataforma: "Viki",
    } ,

    {
        titulo: "The good bad mother",

        genero: "Familia, Comedia, Drama",

        imagem: "assets-kdrama/the-good-bad-mother.jpg",

        sinopse: "Bem no estilo do filho pródigo, aqui uma mãe recebe com muito amor o filho que cresceu apenas ignorando-a. Mas agora ele volta doente, e é sua mãe quem vai cuidar dele. Com muito carinho e cuidado, pede perdão à mãe e promete cumprir sua vingança contra quem causou seu acidente.",

        plataforma: "Netflix",
    } ,

    {
        titulo: "O conto da senhora Ok",

        genero: "Drama historico, Juridico",

        imagem: "assets-kdrama/o-conto-da-senhora-ok.webp",

        sinopse: "Uma escrava tenta ter uma vida quase normal, mas, depois de um acidente, ganha uma nova identidade. Mesmo assim, continua sendo perseguida por uma família da corte.Ainda assim, ela se arrisca fazendo o que mais gosta: atuando como advogada e ajudando os mais necessitados e injustiçados a vencerem seus processos.É aí que o destino dá uma mãozinha nessa trajetória: ela ganha um marido que fará o possível e o impossível para ajudá-la nessa empreitada.",

        plataforma: "Netflix e kocowa",
    } ,


     {
        titulo: "A Flor Guerreira",

        genero: "Ação, drama, historico, romance",

        imagem: "assets-kdrama/a-flor-guerreira.jpg",

        sinopse: "Uma viúva vive uma vida dupla: de dia, é uma pobre viúva; à noite, corre pelos telhados com sua capa, tipo o Zorro, só que em uma versão feminina. Lutando por justiça e ajudando os necessitados.Só que essa sua jornada acaba despertando a curiosidade de um guarda real, que fica cada vez mais intrigado e, de quebra, um tanto apaixonado pela misteriosa guerreira.",

        plataforma: "Netflix e Kocowa",
    } ,


     {
        titulo: "O Conto de Nokdu",

        genero: "Misterio, drama, historico, romance",

        imagem: "assets-kdrama/o-conto-de-nokdu.jpg",

        sinopse: "Um jovem cresceu isolado e quer muito descobrir o que sua família fez de tão errado para que fossem exilados de tudo. Então, decide sair da ilha em busca de respostas sobre seu passado.Nessa jornada, acaba fazendo inimigos e vivendo um romance lento, mas daqueles gostosos de acompanhar.",

        plataforma: "Viki",
    } ,

     {
        titulo: "Love Song for Illusion",

        genero: "Drama, historico, fantasia, misterio, romance",

        imagem: "assets-kdrama/love-song-for-illusion.jpg",

        sinopse: "Um jovem príncipe herdeiro sofre de uma estranha maldição, na qual acaba sendo possuído, às vezes, por um ser maligno. Quando está sob o controle dessa entidade, ele vai para as batalhas; já quando está normal, fica mais recluso, dedicando-se às suas costuras.Só que, de um dia para o outro, seus dias parecem ficar ainda mais tenebrosos, pois o ser maligno quer possuí-lo de vez.E, para complicar ainda mais, tanto ele quanto a entidade acabam desenvolvendo sentimentos por uma jovem donzela que busca vingança pelo que aconteceu com sua família.",

        plataforma: "Viki",
    } ,


     {
        titulo: "Querido Hongrang",

        genero: "Terror, suspense, romance, fantasia",

        imagem: "assets-kdrama/querido-hongrang.webp",

        sinopse: "Uma jovem procura por seu irmão desaparecido há anos e desconfia que ele ainda esteja vivo. Apesar das circunstâncias, corre a lenda de que um fantasma o tenha levado para a floresta.E, para completar, surge um rapaz que afirma ser seu irmão desaparecido.Muitos mistérios, fantasmas e um romance lento que você precisa assistir!",

        plataforma: "Netflix",
    } ,


    {
        titulo: "Behind your touch",

        genero: "Comedia, fantasia, romance",

        imagem: "assets-kdrama/behind-your-touch.jpg",

        sinopse: "Uma veterinária bem divertida e maluquinha vai ganhar um dom inusitado: ao tocar na parte traseira dos animais, consegue descobrir o que aconteceu com eles, vendo tudo através dos olhos deles.Nisso, acaba conhecendo um policial bem maluco, que vai pedir sua ajuda para usar esse dom e descobrir pistas nos casos. Vai vendo cada situação!E tem mais: alguns crimes começam a acontecer na cidade, e um novo morador se torna o principal suspeito. Agora, os dois precisarão entrar em ação para desvendar os mistérios e impedir que novos crimes aconteçam.",

        plataforma: "Netflix",
    } ,

    {
        titulo: "Miss night and day",

        genero: "Comedia, fantasia, romance",

        imagem: "assets-kdrama/miss-night-and-day.jpg",

        sinopse: "Depois de um encontro supermaluco com um gato, nossa protagonista passa a viver com duas personalidades no mesmo corpo. De dia, ela é uma senhora na casa dos 50 anos; à noite, volta a ser ela mesma, uma jovem na casa dos 30. Imagina só a confusão! E, para completar, a coitada ainda tenta ingressar no concorrido mercado de trabalho. Lá, acaba fazendo amizade com um promotor, que vai ajudá-la a resolver alguns mistérios e viver um romance muito fofo..",

        plataforma: "Netflix",
    } ,

    {
        titulo: "Um bom dia para ser um cachorro",

        genero: "Comedia, fantasia, romance",

        imagem: "assets-kdrama/um-bom-para-ser-um-cachorro.jpg",

        sinopse: "Uma jovem tem uma vida quase perfeita, tipo aquelas histórias de quem nunca foi beijada. Isso porque ela sofre de uma maldição: quando é beijada, vira um cachorro.E, para o seu desespero, já tem alguém de olho nela. Mas, para nossa alegria, ela conhece um jovem professor que, aos poucos, fica apaixonado por ela. Só que ele tem muito medo de cachorros! Veja só: depois de beijá-la, ela acaba virando um cachorro. E agora precisa descobrir como reverter a maldição e desfazer o beijo. Que confusão enorme ela foi se meter!",

        plataforma: "Viki",
    } ,

    {
        titulo: "Adoravel corredora",

        genero: "Drama, Comedia, fantasia, romance",

        imagem: "assets-kdrama/adoravel-corredora.jpg",

        sinopse: "Uma jovem que foi salva por seu ídolo recebe a triste notícia de que ele faleceu. Devastada e sem acreditar no que aconteceu, ela ganha a oportunidade de voltar no tempo para tentar cuidar dele e evitar que ele venha a morrer. Aquele romance gostoso, com uma segunda chance para o amor!",

        plataforma: "Viki",
    } ,

    {
        titulo: "All of us are dead",

        genero: "Terror, misterio, fantasia",

        imagem: "assets-kdrama/all-of-us-are-dead.jpeg",

        sinopse: "Imagina um dia normal na escola, quando, do nada, surgem vários zumbis. Agora, sobreviver é quase impossível. Só que, em meio a tudo isso, é descoberto que alguns alunos conseguem controlar a possível mutação. Muitos sustos e conflitos surgem enquanto eles lutam para sobreviver a uma invasão zumbi.",

        plataforma: "Netflix",
    } ,

    {
        titulo: "Happiness",

        genero: "Terror, misterio, fantasia",

        imagem: "assets-kdrama/happiness.webp",

        sinopse: "Um casal de amigos decide se casar para conquistar seu tão sonhado apartamento. Só que, para tristeza deles — e nossa —, o sonho acaba virando um pesadelo. Isso porque uma infecção, junto à Covid-19, começa a causar um nervosismo intenso nas vítimas, fazendo com que elas se transformem em zumbis. Agora, em quarentena, eles precisarão enfrentar e sobreviver ao vírus dos zumbis e aos vizinhos mais malucos que os próprios zumbis!",

        plataforma: "Viki e Netflix",
    } ,


     {
        titulo: "Hong a infiltrada",

        genero: "Comedia, drama, misterio",

        imagem: "assets-kdrama/hong-a-infiltrada.jpg",

        sinopse: "Uma moça que consegue se disfarçar muito bem vai entrar em uma grande empreitada para investigar crimes de corrupção em uma empresa. Para isso, ela se infiltra como uma estagiária na casa dos 30 anos. Fazendo várias amizades e passando por momentos divertidos e emocionantes, ela tenta descobrir quem está por trás do famoso caixa 2.Só que ela nem imagina quem será seu chefe: o seu ex-namorado! Agora, precisará esconder seu disfarce ao máximo para conseguir concluir sua investigação sem ser descoberta.",

        plataforma: "Netflix",
    } ,

    {
        titulo: "Strang girl Nam Soon",

        genero: "Comedia, drama, misterio, romance",

        imagem: "assets-kdrama/strong-girl-nam-soon.jpg",

        sinopse: "Uma família com dons especiais, principalmente as mulheres, possui uma superforça. Só que uma das filhas acaba desaparecendo, e agora toda a família está à procura da jovem, oferecendo até uma recompensa para quem conseguir trazê-la de volta.Para nossa alegria, ela reaparece cheia de superpoderes, novos amigos e, quem sabe, até um possível namorado! agora a família luta contra o tempo para investigar um possível vilão investidor e, assim, tentar salvar a cidade de uma substância que pode ser capaz de destruir o ser humano.",

        plataforma: "Netflix",
    } ,

     {
        titulo: "100 days my prince",

        genero: "Comedia, drama, misterio, romance",

        imagem: "assets-kdrama/100-days-my-prince.jpg",

        sinopse: "Uma jovem moça precisa se casar o mais rapido possivel, se nçao sofrera duras punições. Mas para sorte dela um jovem que perdeu a memoria sera sua possivel salvação.  Num casamento de faz de conta, cenas divertidas e dramaticas. Em busca de descobrir qual a sua verdadeira identidade.",

        plataforma: "Netflix e Viki",
    } ,

    {
        titulo: "Hello my twenties",

        genero: "Comedia, drama, misterio, romance",

        imagem: "assets-kdrama/hello-my-twenties.jpg",

        sinopse: "Cinco adoraveis amigas, divertidas e maluquinhas dividem um ap, enquanto se metem altas confusões. Todas na casa dos 20 anos, universitarias, sonhando com o diploma e a carreira de sucesso. Vivendo paixões e nos divertindo assistindo..",

        plataforma: "Netflix, Viki e Prime video",
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

