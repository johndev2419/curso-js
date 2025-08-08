function cadastroSimples(){
    let nomeUsuario = prompt("Digite seu nome").trim();
    let idade = parseInt(prompt("Digite sua idade"));
    let altura = parseFloat(prompt("Digite sua altura"));
     console.log(" Olá meu nome e", nomeUsuario,"tenho", idade, "anos","e minha altura", altura, "metros.");
     alert(
        "Nome:" + " " + nomeUsuario +
        "\nIdade:" + " " + idade + 
        "\nAltura:" + " "+ altura
      )
}

function calculadoraFutura(){
  let idade = parseInt(prompt("Digite sua idade atual"));
  let resultado = idade + 5;
    console.log("Idade:", idade);
    console.log("resultado:", resultado);
      alert(
          "Sua idade será:" + " " + resultado
      );
}

function conversaoMoeda(){
  let valor = parseFloat(prompt("Digite o valor em R$"))
  let valorDolar = 5.43;
  let resultado = valor / valorDolar
   console.log("valor desejado", valor);
   console.log("valor que receberá em dolar:", valorDolar);
   
   

}

