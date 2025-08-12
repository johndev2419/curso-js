function cadastroSimples() {
  let nomeUsuario = prompt("Digite seu nome").trim();
  let idade = parseInt(prompt("Digite sua idade"));
  let altura = parseFloat(prompt("Digite sua altura"));
  console.log(" Olá meu nome e", nomeUsuario, "tenho", idade, "anos", "e minha altura", altura, "metros.");
  alert(
    "Nome:" + " " + nomeUsuario +
    "\nIdade:" + " " + idade +
    "\nAltura:" + " " + altura
  )
}

function calculadoraFutura() {
  let idade = parseInt(prompt("Digite sua idade atual"));
  let resultado = idade + 5;
  console.log("Idade:", idade);
  console.log("resultado:", resultado);
  alert(
    "Sua idade será:" + " " + resultado
  );
}

function conversaoMoeda() {
  let valor = parseFloat(prompt("Digite o valor em R$"))
  let valorDolar = 5.43.toFixed(2);
  let resultado = valor / valorDolar;
  console.log("valor desejado", valor);
  console.log("valor que receberá em dolar:", resultado);
}

function calculoRetangulo() {
  let largura = prompt("digite a largura");
  let altura = prompt("digite a altura");
  let resultado = (largura * altura);
  console.log("A área do retangulo é ", resultado, "metros quadrados");

}

function luzAcesa() {
  let luzAcesa = false
  let comando = parseInt(prompt("digite 1 para luz acender e 0 para luz apagada"));
  let ligarLuz = 1;
  let apagarLuz = 0;
  console.log("A luz está acesar", ligarLuz);
  console.log("A luz está apagada", apagarLuz);
}

function mediaNotas() {
  let quantidadeDesejada = parseInt(prompt("digite a quantidade do aluno"));


  let indice = 0;
  while (indice < quantidadeDesejada) {
    const nota1 = parseFloat(prompt("digie a nota 1"));
    const nota2 = parseFloat(prompt("digie a nota 2"));
    const nota3 = parseFloat(prompt("digie a nota 3"));

    const media = (nota1 + nota2 + nota3) / 3;
    console.log("A média das notas é", media);


    indice = indice + 1;
  }
}

function descontoProduto() {
  let valorProduto = parseFloat(prompt("digite o valor do produto"));
  let valorDesconto = parseFloat(prompt("Digite o valor do desconto"));
  let valorFinal = valorProduto - (valorProduto * (valorDesconto / 100));
  console.log("O valor final com desconto é R$:", valorFinal);
}

function temperaturaFahren() {
  let celsius = parseInt(prompt("Digite a temperatura em celsius"));
  let fahrenheit = celsius * 9 / 5 + 32;
  alert("sua temperatura em fahrenheit e de :" + fahrenheit)
}

function somaMultiplicacao() {
  let numero1 = parseInt(prompt("digite os numeros inteiros"));
  let numero2 = parseInt(prompt("digite os numeros inteiros"));
  let soma = numero1 + numero2;
  let produto = (numero1 * numero2);
  console.log("sua soma é:", soma);
  console.log("seu produto é:", produto);
}

function trocaValores(){
  let numero1 = parseInt(prompt("Digite um valor 1"));
  let numero2 = parseInt(prompt("Digite o valor 2"));
  let troca = 
   

   
}