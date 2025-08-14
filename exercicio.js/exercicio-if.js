function maioridade(){
    let idade = parseInt(prompt("Digite sua idade"));
    if(idade < 18){
        alert("você é maior de idade");
    } else{
        alert("você é menor de idade");
    }
}

function imparouPar(){
    let numero = parseInt(prompt("Digite um numero"));
    if(numero % 2 === 0){
        alert("numero é Par");
    }else {
      alert("numero é impar");
    }
}

function aprovadoouReprovado(){
    let nota = parseInt(prompt("Digite sua nota"));
    if(nota > 6){
        alert("esta aprovado");
    } else if (nota >= 5){
        alert("recuperação");
    } else{
        alert("esta reprovado");
    }
}    

function senhaCorreta(){
    let senha =prompt("Digite sua senha");
    if (senha === "12345"){
     alert("senha correta")
    } else{
        alert("senha incorreta");
    }
}

function promoçãoDesconto(){
    let compra = prompt("Digite o valor da sua compra");
    if( compra >= 100){
        alert("você ganhou desconto de 10%");
    } else{
        alert("sem desconto disponivel");
    }
}

function classificaçãoIdade(){
    let idade = parseInt(prompt("Digite sua idade"));
    let classificacao = "";
    if(idade <= 12){
        alert("você é criança");
    } else if( idade >=12 && idade <=17){
        alert("você é adolecente");
    } else if (idade >=18 && idade <=59 ){
        alert("você é adulto");
    } else if (idade >=60){
        alert("você é idoso");
    }
}

function maiorNumeros(){
    let numero1 = parseInt(prompt("Digite um número"));
    let numero2 = parseInt(prompt("Digite o 2 número"));

    if(numero1 > numero2){
        alert(numero1 +" "+ "e maior que o"+ " " + numero2);
    } else if (numero1 < numero2){
        alert(numero2 + " " + "é maior que o"+ " "+ numero1);
    } else if (numero1 = numero2){
        alert("números são iguais");
    }
}

function numero(){
    let numero = parseInt(prompt("Digite um número"));
    if(numero > 0){
        alert("positivo");
    } else if (numero < 0){  
        alert("negativo");
    } else if (numero === 0){
        alert("esse número é 0");
    }
}

function prova(){
    let nota = parseFloat(prompt("Digite sua nota"));
    if( nota >= 7){
        alert("Aprovado");
    } else if (nota >=5 && nota <=6.9){
        alert("recuperação");
    } else if (nota >= 0){
        alert("reprovado");
    }
}

