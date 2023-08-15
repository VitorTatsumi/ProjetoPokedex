//Array de Objetos - Lista de pokemons

const pokemons = [{
    nome: "Bulbasaur", 
    numero:  1, 
    tipo: ['grass', 'poison'], 
    imagem: 'https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/cf47f9fac4ed3037ff2a8ea83204e32aff8fb5f3.png'
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
}];

//Fábrica de pokemons

class Pokemon{
    constructor(name, numero, tipo){
        this.name = name;
        this.numero = numero;
        this.tipo = tipo;
        this.imagem = 'https://img.pokemondb.net/artwork/large/' + name + '.jpg';
    }
}

for (i = 0; i < pokemons.length; i++){

    var cartao = document.createElement('div');
    cartao.className= 'div1';
    document.body.appendChild(cartao);

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
        textoTipo.innerHTML = JSON.stringify(pokemons[i].tipo[0]).replace(/"/g, '');
        cartao.appendChild(textoTipo);
    }else{
        textoTipo.innerHTML = JSON.stringify(pokemons[i].tipo[0]).replace(/"/g, '');
        cartao.appendChild(textoTipo);

        textoTipo2.innerHTML = JSON.stringify(pokemons[i].tipo[1]).replace(/"/g, '');
        textoTipo.appendChild(textoTipo2);
    }

    if(pokemons[i].tipo[0] == 'grass'){
        textoTipo.className = 'grass';
    }else if(pokemons[i].tipo[0] == 'poison'){
        textoTipo.className = 'poison';
    }else if(pokemons[i].tipo[0] == 'fire'){  
        textoTipo.className = 'fire';
    }else if(pokemons[i].tipo[0] == 'water'){
        textoTipo.className = 'water';
    }

    if(pokemons[i].tipo[1] == 'grass'){
        textoTipo2.className = 'grass';
    }else if(pokemons[i].tipo[1] == 'poison'){
        textoTipo2.className = 'poison';
    }else if(pokemons[i].tipo[1] == 'fire'){  
        textoTipo2.className = 'fire';
    }else if(pokemons[i].tipo[1] == 'water'){
        textoTipo2.className = 'water';
    }
}

var psqbox = document.createElement('div');
psqbox.className = 'psqbox';
document.body.prepend(psqbox);

var inputSearch = document.createElement('input');
inputSearch.className = 'input-search';
psqbox.prepend(inputSearch);

var titulo = document.createElement('h1');
titulo.innerHTML = 'TesteTitulo';
titulo.className = 'titulo';
document.body.prepend(titulo);