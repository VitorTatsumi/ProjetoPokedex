//Array de Objetos - Lista de pokemons

const pokemons = [{
    nome: "Bulbasaur", 
    numero:  1, 
    tipo: ['grass', 'poison'], 
    imagem: 'https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/cf47f9fac4ed3037ff2a8ea83204e32aff8fb5f3.png', texto: 'Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the suns rays, the seed grows progressively larger.'
}, {
    nome: "Ivysaur", 
    numero: 2, 
    tipo: ['grass', 'poison'], 
    imagem: 'https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/3245e4f8c04aa0619cb31884dbf123c6918b3700.png'
}, {
    nome: "Venusaur", 
    numero: 3,
    tipo: ['grass', 'poison'], 
    imagem: 'https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/0186d64c5773c8d3d03cd05dc79574b2d2798d4f.png'
}, {
    nome: "Charmander", 
    numero: 4,
    tipo: ['fire'], 
    imagem: 'https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/d0ee81f16175c97770192fb691fdda8da1f4f349.png'
}, {
    nome: "Charmeleon", 
    numero: 5,
    tipo: ['fire'],
    imagem: 'https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/285395ca77d82861fd30cea64567021a50c1169c.png'
}, {
    nome: "Charizard",
    numero: 6,
    tipo: ['fire'], 
    imagem: 'https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/2050f1fd1283f473d7d048f8631712e7e003f802.png'
}, {
    nome: "Squirtle",
    numero: 7,
    tipo: ['water'], 
    imagem: 'https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/5794f0251b1180998d72d1f8568239620ff5279c.png'
}, {
    nome: "Wartortle",
    numero: 8,
    tipo: ['water'], 
    imagem: 'https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/a3bc17e6215031332462cc64e59b7922ddd14b91.png'
}, {
    nome: "Blastoise",
    numero: 9,
    tipo: ['water'], 
    imagem: 'https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/2fe157db59153af8abd636ab03c7df6f28b08242.png'
}, {
    nome: "Caterpie",
    numero: 10,
    tipo: ['bug'], 
    imagem: 'https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/68f0cec6bcba20a0c53db3d8cfce81bd319d2c82.png'
}, {
    nome: "Metapod",
    numero: 11,
    tipo: ['bug'], 
    imagem: 'https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/05fd4676fa4a4b58288510a97a5211e066e02464.png'
}, {
    nome: "Butterfree",
    numero: 12,
    tipo: ['bug', 'flying'], 
    imagem: 'https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/eacd20285cb634ba9fea41fc0fa13871c2fcbc66.png'
}];

//Fábrica de pokemons

class Pokemon{
    constructor(name, numero, tipo, imagem, texto){
        this.name = name;
        this.numero = numero;
        this.tipo = tipo;
        this.imagem = imagem;
        this.texto = texto;
    }
}

function carregaOrdenado(){
    //pesquisaCard.parentNode.removeChild(pesquisaCard);
    //pesquisaCard.style.display = 'none';
    for (i = 0; i < pokemons.length; i++){

        var mainSection = document.getElementById('mainSection');
        

        var cartao = document.createElement('div');
        cartao.className= 'div1';
        mainSection.appendChild(cartao);

        var textoNum = document.createElement('p');
        textoNum.className = 'numero';
        textoNum.innerHTML = JSON.stringify('nº' + pokemons[i].numero).replace(/"/g, '');
        cartao.appendChild(textoNum);

        var textoNome = document.createElement('p');
        textoNome.className = 'nome';
        textoNome.innerHTML = JSON.stringify(pokemons[i].nome).replace(/"/g, '');
        cartao.appendChild(textoNome);

        cartao.appendChild(document.createElement('img')).src = pokemons[i].imagem;
        var textoTipo = document.createElement('p');
        var textoTipo2 = document.createElement('p');

        if(pokemons[i].tipo[1] == undefined){
            textoTipo.innerHTML = JSON.stringify(pokemons[i].tipo[0]).replace(/"/g, '').toUpperCase();
            cartao.appendChild(textoTipo);
        }else{
            textoTipo.innerHTML = JSON.stringify(pokemons[i].tipo[0]).replace(/"/g, '').toUpperCase();
            cartao.appendChild(textoTipo);

            textoTipo2.innerHTML = JSON.stringify(pokemons[i].tipo[1]).replace(/"/g, '').toUpperCase();
            cartao.appendChild(textoTipo2);
        }

        if(pokemons[i].tipo[0] == 'grass'){
            textoTipo.className = 'grass';
        }else if(pokemons[i].tipo[0] == 'poison'){
            textoTipo.className = 'poison';
        }else if(pokemons[i].tipo[0] == 'fire'){  
            textoTipo.className = 'fire';
        }else if(pokemons[i].tipo[0] == 'water'){
            textoTipo.className = 'water';
        }else if(pokemons[i].tipo[0] == 'bug'){
            textoTipo.className = 'bug';
        }else if(pokemons[i].tipo[0] == 'flying'){
            textoTipo.className = 'flying';
        }

        if(pokemons[i].tipo[1] == 'grass'){
            textoTipo2.className = 'grass';
        }else if(pokemons[i].tipo[1] == 'poison'){
            textoTipo2.className = 'poison';
        }else if(pokemons[i].tipo[1] == 'fire'){  
            textoTipo2.className = 'fire';
        }else if(pokemons[i].tipo[1] == 'water'){
            textoTipo2.className = 'water';
        }else if(pokemons[i].tipo[1] == 'bug'){
            textoTipo2.className = 'bug';
        }else if(pokemons[i].tipo[1] == 'flying'){
            textoTipo2.className = 'flying';
        }

        //Evento para quando o cartão for clicado
        //Deve ficar dentro do laço para alimentar cada card inserido com este evento
        cartao.addEventListener('click', function(){
            alert('clicou');
        });
    }
}


var titulo = document.createElement('h1');
titulo.innerHTML = 'PokéDex Tatsumi';
titulo.className = 'titulo';
document.body.prepend(titulo);

function pesquisar(){
    var textoPesquisa = document.getElementById('textoPesquisa').value;

    //Faz a verificação se o valor do input existe no Array Pokemons
    var encontrar = pokemons.find(pokemons => pokemons.nome.toUpperCase() === textoPesquisa.toUpperCase());
    //var encontrar = JSON.stringify(encontrar);
    var result = new Pokemon(encontrar.nome, encontrar.numero, encontrar.tipo, encontrar.imagem, encontrar.texto);

    //Transforme e destransforma o objeto para leitura
    //var result = JSON.stringify(result);

    //Registra o index do Array do pokemon resultado da busca
    var index = (result.numero) - 1;

    //Apaga o conteúdo da mainSection 
    //mainSection.style.display = 'none';
    mainSection.parentNode.removeChild(mainSection);


    //Criação do card da pesquisa
    var sectionPesquisa = document.getElementById('searchSection');
    sectionPesquisa.className = 'mainSection';
    var pesquisaCard = document.createElement('div');
    pesquisaCard.className = 'div1'
    sectionPesquisa.appendChild(pesquisaCard)



    var pesquisaNumero = document.createElement('p');
    pesquisaNumero.className = 'numero';
    pesquisaNumero.innerHTML = JSON.stringify("nº" + pokemons[index].numero).replace(/"/g, "");
    pesquisaCard.appendChild(pesquisaNumero);

    var pesquisaNome = document.createElement('p');
    pesquisaNome.className = 'nome';
    pesquisaNome.innerHTML = JSON.stringify(pokemons[index].nome).replace(/"/g, "");
    pesquisaCard.appendChild(pesquisaNome);

    pesquisaCard.appendChild(document.createElement('img')).src = pokemons[index].imagem;


    var textoTipopsq = document.createElement('p');
    var textoTipo2psq = document.createElement('p');

    alert(pokemons[index].tipo)

    if(pokemons[index].tipo[1] == undefined){
        textoTipopsq.innerHTML = JSON.stringify(pokemons[index].tipo[0]).replace(/"/g, '').toUpperCase();
        pesquisaCard.appendChild(textoTipopsq);
    }else{
        textoTipopsq.innerHTML = JSON.stringify(pokemons[index].tipo[0]).replace(/"/g, '').toUpperCase();
        pesquisaCard.appendChild(textoTipopsq);

        textoTipo2psq.innerHTML = JSON.stringify(pokemons[index].tipo[1]).replace(/"/g, '').toUpperCase();
        pesquisaCard.appendChild(textoTipo2psq);
    }
}
