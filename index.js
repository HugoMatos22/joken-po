/*const resultado = document.querySelector(".resultado");
const meusPontos = document.querySelector("#my-score")
const pontosMaquina = document.querySelector("#score-maquina")

let minhaPontuacao = 0
let pontuacaoMaquina= 0 


const humanoClicou = (humano) => {
  jogandoOjogo(humano, maquinaEscolheu());
};

const maquinaEscolheu = () => {
  const opcoes = ["Pedra", "Papel", "Tesoura"];
  const randomNumber = Math.floor(Math.random() * 3);

  console.log(randomNumber);
  return opcoes[randomNumber];
};

const jogandoOjogo = (humano, maquina) => {
  console.log(`Humano: ${humano} e máquina ${maquina}`);

  if (humano === maquina) {
    resultado.innerHTML = "Deu empate";
  
  } else if (
    (humano === "pedra" && maquina === "tesoura") ||
    (humano === "papel" && maquina === "pedra") ||
    (humano === "tesoura" && maquina === "papel")
  ) {
    minhaPontuacao ++
    meusPontos.innerHTML = minhaPontuacao
    resultado.innerHTML = "Você ganhou da Bia";
    
  } else {
    pontuacaoMaquina ++
    pontosMaquina.innerHTML = pontuacaoMaquina
    resultado.innerHTML = "Você perder para a BiA ";
  }
}*/


const result = document.querySelector(".resultado")
const meuResultado = document.querySelector("#my-score")
const resultadoMaquina = document.querySelector("#score-maquina")
const empateJogo = document.querySelector("#score-empate")

let meuPonto = 0
let pontoMaquina = 0
let empateTotal = 0


const humanoClicou = (humano) =>{
  jogando(humano, maquinaEscolheu())
}

const maquinaEscolheu = () =>{
  const opcao = ['pedra', 'papel', 'tesoura']
  const randomNumber = Math.floor(Math.random() * 3)
  
  return opcao[randomNumber]
}


const jogando = (humano, maquina) =>{
  console.log(`Humano ${humano} x Maquina ${maquina}`)

  if(humano === maquina){
    empateTotal++
    empateJogo.innerHTML = empateTotal
    result.innerHTML = "Deu empate"
  }
  else if ((humano === "papel" && maquina === "pedra") || (humano === "tesoura" && maquina === "papel") || (humano === "pedra" && maquina === "tesoura")){

    meuPonto++
    meuResultado.innerHTML = meuPonto

    result.innerHTML = "Você ganhou"
  }
  else{
    pontoMaquina++
    resultadoMaquina.innerHTML = pontoMaquina

    result.innerHTML = "Você perdeu para a BIA"
  }

}