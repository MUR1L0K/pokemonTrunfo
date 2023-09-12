var carta1 = {
  nome: "Bulbasauro",
  imagem: "images/bulbasauro.jpg",
  atributos: {
    Ataque: 8,
    Defesa: 6,
    Vida: 9,
  },
};
var carta2 = {
  nome: "Pikachu",
  imagem: "images/pikachu.png",
  atributos: {
    Ataque: 10,
    Defesa: 7,
    Vida: 7,
  },
};
var carta3 = {
  nome: "Blastoise",
  imagem: "images/blastoise.png",
  atributos: {
    Ataque: 6,
    Defesa: 8,
    Vida: 10,
  },
};
var carta4 = {
  nome: "Charizard",
  imagem: "images/charizard.png",
  atributos: {
    Ataque: 9,
    Defesa: 5,
    Vida: 8,
  },
};
var carta5 = {
  nome: "Butterfree",
  imagem: "images/butterfree.png",
  atributos: {
    Ataque: 7,
    Defesa: 9,
    Vida: 6,
  },
};
var carta6 = {
  nome: "Pidgeot",
  imagem: "images/pidgeot.png",
  atributos: {
    Ataque: 8,
    Defesa: 6,
    Vida: 7,
  },
};
var carta7 = {
  nome: "Nidoqueen",
  imagem: "images/nido.png",
  atributos: {
    Ataque: 7,
    Defesa: 7,
    Vida: 9,
  },
};
var carta8 = {
  nome: "Nidoking",
  imagem: "images/nidok.png",
  atributos: {
    Ataque: 8,
    Defesa: 8,
    Vida: 9,
  },
};
var carta9 = {
  nome: "Ninetales",
  imagem: "images/nine.png",
  atributos: {
    Ataque: 9,
    Defesa: 6,
    Vida: 7,
  },
};
var carta10 = {
  nome: "Persian",
  imagem: "images/persian.png",
  atributos: {
    Ataque: 8,
    Defesa: 6,
    Vida: 7,
  },
};

var cartas = [
  carta1,
  carta2,
  carta3,
  carta4,
  carta5,
  carta6,
  carta7,
  carta8,
  carta9,
  carta10,
];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  let orientationText = document.getElementById("orientationText");
  orientationText.innerText = "Escolha seu atributo!";
  var numeroCartaMaquina = parseInt(Math.random() * 10);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 10);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 10);
  }
  cartaJogador = cartas[numeroCartaJogador];

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  var divResultado = document.getElementById("resultado");

  if (valorCartaJogador > valorCartaMaquina) {
    htmlResultado = "<p class='resultado-final'> Venceu! </p>";
  } else if (valorCartaMaquina > valorCartaJogador) {
    htmlResultado = "<p class='resultado-final'> Perdeu! </p>";
  } else {
    htmlResultado = "<p class='resultado-final'> Empatou! </p>";
  }
  divResultado.innerHTML = htmlResultado;
  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status maquinaCard'>";
  var opcoesTexto = "";

  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

/* faltou os desafios de: Desenvolver um sistema em que a cada carta que um jogador ganhe, ele fique com a carta do oponente e vice versa 
Transformar as funções exibirCartaMaquina() e exibirCartaJogador() em apenas uma, chamada exibirCarta(), utilizando para isso a passagem de parâmetros */
