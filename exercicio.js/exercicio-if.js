function maioridade() {
    let idade = parseInt(prompt("Digite sua idade"));
    if (idade < 18) {
        alert("você é maior de idade");
    } else {
        alert("você é menor de idade");
    }
}

function imparouPar() {
    let numero = parseInt(prompt("Digite um numero"));
    if (numero % 2 === 0) {
        alert("numero é Par");
    } else {
        alert("numero é impar");
    }
}

function aprovadoouReprovado() {
    let nota = parseInt(prompt("Digite sua nota"));
    if (nota > 6) {
        alert("esta aprovado");
    } else if (nota >= 5) {
        alert("recuperação");
    } else {
        alert("esta reprovado");
    }
}

function senhaCorreta() {
    let senha = prompt("Digite sua senha");
    if (senha === "12345") {
        alert("senha correta")
    } else {
        alert("senha incorreta");
    }
}

function promoçãoDesconto() {
    let compra = prompt("Digite o valor da sua compra");
    if (compra >= 100) {
        alert("você ganhou desconto de 10%");
    } else {
        alert("sem desconto disponivel");
    }
}

function classificaçãoIdade() {
    let idade = parseInt(prompt("Digite sua idade"));
    let classificacao = "";
    if (idade <= 12) {
        alert("você é criança");
    } else if (idade >= 12 && idade <= 17) {
        alert("você é adolecente");
    } else if (idade >= 18 && idade <= 59) {
        alert("você é adulto");
    } else if (idade >= 60) {
        alert("você é idoso");
    }
}

function maiorNumeros() {
    let numero1 = parseInt(prompt("Digite um número"));
    let numero2 = parseInt(prompt("Digite o 2 número"));

    if (numero1 > numero2) {
        alert(numero1 + " " + "e maior que o" + " " + numero2);
    } else if (numero1 < numero2) {
        alert(numero2 + " " + "é maior que o" + " " + numero1);
    } else if (numero1 = numero2) {
        alert("números são iguais");
    }
}

function numero() {
    let numero = parseInt(prompt("Digite um número"));
    if (numero > 0) {
        alert("positivo");
    } else if (numero < 0) {
        alert("negativo");
    } else if (numero === 0) {
        alert("esse número é 0");
    }
}

function prova() {
    let nota = parseFloat(prompt("Digite sua nota"));
    if (nota >= 7) {
        alert("Aprovado");
    } else if (nota >= 5 && nota <= 6.9) {
        alert("recuperação");
    } else if (nota >= 0) {
        alert("reprovado");
    }
}

function multiplos() {
    let numero = parseInt(prompt("Digite um número inteiro:"));

    if (numero % 3 === 0 && numero % 5 === 0) {
        alert("Múltiplo de 3 e 5");
    } else if (numero % 3 === 0) {
        alert("Múltiplo de 3");
    } else if (numero % 5 === 0) {
        alert("Múltiplo de 5");
    } else {
        alert("Não é múltiplo de 3 nem de 5");
    }
}

function acessoEvento() {
    let idade = parseInt(prompt("Digite sua idade"));
    let ingresso = prompt("tem ingresso: (sim ou não)");

    if (idade >= 18, ingresso === "sim") {
        alert("Entrada permitida");
    } else if (idade <= 17, ingresso === "não" || ingresso === "sim") {
        alert("Entrada não permitida");
    }

}

function bonus() {
    let compra = parseFloat(prompt("digite valor da compra"));
    let vip = prompt("cliente vip: digite (sim ou não)");

    if (compra > 200 && vip === "sim") {
        alert("Você ganhou um brinde !");
    } else {
        alert("Sem bônus disponivel");
    }
}

function senha() {
    let login = prompt("Digite o nome usuario");
    let senha = prompt("Digite a senha");
    if (login === "admin" && senha === "12345") {
        alert("login bem sucedido")
    } else {
        alert("login invalido");
    }
}

function triangulo() {
    let lado1 = parseFloat(prompt("digita o valor do primero lado do triangulo"));
    let lado2 = parseFloat(prompt("digite o vaolor do segundo lado do triangulo"));
    let lado3 = parseFloat(prompt("digite o valor do terceiro lado do triangulo"));
    if (lado1 + lado2 > lado3 && lado2 + lado3 > lado1 && lado3 + lado1 > lado2) {
        alert("triangulo válidado");
    } else {
        alert("triangulo inválido");
    }
}

function anoBissexto() {
    let ano = parseFloat(prompt("digite o ano que deseja"));
    if (ano % 4 === 0 || ano % 100 !== 0 && ano % 400 === 0) {
        alert("esse é um ano bissexto");
    } else {
        alert("não é um ano bissexto");
    }
}

function quadrado() {
    let ladoDireito = parseFloat(prompt("Digite o valor do lado direito do quadrado "));
    let ladoBaixo = parseFloat(prompt("Digite o valor da parte de baixo do quadrado"));
    let ladoesquerdo = parseFloat(prompt("Digite o valor do lado esquerdo do quadrado"));
    let ladocima = parseFloat(prompt("Digite o valor da parte de cima do quadrado"));

    if (ladoDireito === ladoesquerdo && ladoBaixo === ladocima && ladoBaixo === ladoDireito) {
        alert("isto é um quadrado");
    } else {
        alert("não é um quadrado");
    }
}

function retangulo() {
    let ladocima = parseFloat(prompt("Digite o valor da parte de cima do retangulo"));
    let ladoBaixo = parseFloat(prompt("Digite o valor da parte de baixo do retangulo"));
    let ladoesquerdo = parseFloat(prompt("Digite o valor do lado direito do retangulo"));
    let ladoDireito = parseFloat(prompt("Digite o valor do lado direito do retangulo"));

    if (ladoDireito === ladoesquerdo && ladoBaixo === ladocima) {
        alert("isto é um retangulo");
    } else {
        alert("isto não é retangulo");
    }
}

function ordemCrescente() {
    let n1 = parseInt(prompt("Digite um número"));
    let n2 = parseInt(prompt("Digite um número"));
    let n3 = parseInt(prompt("Digite um número"));

    let comeco;
    let meio;
    let fim;

    if (n1 >= n2 && n2 >= n3) {
        comeco = n3
        meio = n2
        fim = n1
    }
    if (n1 >= n3 && n3 >= n2) {
        comeco = n2
        meio = n3
        fim = n1
    }
    if (n2 >= n1 && n1 >= n3) {
        comeco = n3
        meio = n1
        fim = n2
    }
    if (n2 >= n3 && n3 >= n1) {
        comeco = n1
        meio = n3
        fim = n2
    }
    if (n3 >= n1 && n1 >= n2) {
        comeco = n2
        meio = n1
        fim = n3
    }
    if (n3 >= n2 && n2 >= n1) {
        comeco = n1
        meio = n2
        fim = n3
    }

    alert("apresento seus números em ordem crescente:" + " " + comeco + "," + " " + meio + "," + " " + "e" + " " + fim);

}

/* function pedirNota() {
    let n1 = parseFloat(prompt("Digite a primeira nota do aluno"));
    let n2 = parseFloat(prompt("Digite a segunda nota do aluno"));
    let n3 = parseFloat(prompt("Digite a terceira nota do aluno"));
    let trabalhoextra = prompt("aluno fez trabalho extra? (sim ou não");
    let media = (n1 * 2 + n2 * 3 + n3 * 5) / 10;

    if(media >= 6.8 && media < 7){
        if(trabalhoextra === "sim"){
            media  = media = 0.2;

        }
    }
}
 */
/*  if (media >= 6.8 && media < 7) {
     if (trabalhoextra === "sim") {
         media = media + 0.2;
         if (media > 10) {
             media = 10
             alert("aluno aprovado")
         }
     }
  }


}  */

function calcularCompra() {
    let valor = parseFloat(prompt("Digite o valor da compra"));
    let cupom = prompt("Digite o cupom de descontos(fretegratis, desc10 ou deixar em branco caso não tenha cupom");
    let frete = 25
    let desconto;

    if (valor >= 500) {
        desconto = 0.15;
    } else if (valor >= 300) {
        desconto = 0.10;
    } else if (valor >= 150) {
        desconto = 0.05;
    }
    let valorcomDesconto = valor * (1 - desconto);

    if (cupom === "desc10") {
        valorcomDesconto * 0.90;
    }
    if (cupom === "fretegratis") {
        frete = 0;
    }

    let valorFinal = valorcomDesconto + frete;


    if (valorFinal < 0) {
        alert("o valor final = 0")
    }

    alert("resumo da compra:" +
        "\n\nValor bruto da compra:" + " " + valor +
        "\nDesconto progressivo" + " " + desconto +
        "\ncupom aplicado:" + " " + cupom +
        "\nfrete:" + " " + frete +
        "\nValor final:" + " " + valorFinal
    );

}

function verificarMulta() {
    const velocidade = parseFloat(prompt("digite a velocidade do automovel (km/h)"));
    const limite = parseFloat(prompt("Digite o limite da via"));
    if (velocidade <= limite) {
        alert("sem infração");
    }
    const excessovelociadade = velocidade - limite;
    const verificacao = (excessovelociadade / limite)* 100 ;

    if (verificacao <= 20) {
        alert("Infração leve");
    } else if (verificacao <= 50) {
        alert("Infração grave");
    } else if (verificacao > 50) {
        alert("Infração gravíssima");
    }
}

function verificarMeiaentrada(){
    let idade = parseInt(prompt("Digite sua idade"));
    let estudante = prompt("você é estudante (sim/não)");
    let meia;
    let preçocheio = 30;

    if( idade < 12 || idade > 60 && estudante === "sim"){
        alert("você tem direito a meia entrada");
    }else {
        alert("você pagará o preço cheio" + " " + preçocheio);
    }
}

function verificarquadrante(){
    const x = parseFloat(prompt("Digite o valor de X"));
    const y = parseFloat(prompt("Digite o valor de Y"));

    if(x === 0 && y === 0){
        alert("Origem");
    } else if(x === 0 ){
        alert("Eixo Y");
    } else if(y === 0){
        alert("Eixo X");
    }else if ( x > 0 && y> 0){
        alert("Primeiro quadrante");
    } else if ( x < 0 && y > 0){
        alert("segundo quadrante");
    } else if ( x < 0 && y < 0 ){
        alert("terceiro quadrante");
    } else if ( x > 0 && y < 0){
        alert("quarto quadrante");
    }
}
