 function totalCompra() {
    let indice = 0;
    let soma = 0;

    while (indice < 4) {
        let preco = parseFloat(prompt("Digite os valores da compra:").replace(",", "."));
        soma = soma + preco;

        indice = indice + 1;
    }

    let mediaSoma = soma / 4;

    alert("O preço total foi: " + soma.toFixed(2) +
        "\nA média: " + mediaSoma.toFixed(2));
}

function contagemInicial() {
    let indice = 0;
    let comA = 0;
    while (indice < 5) {
        let palavra = prompt("digite uma palavra:").toLocaleLowerCase().trim();

        if (palavra.startsWith("a")) {
            comA = comA + 1;
        }

        indice = indice + 1;

    }
    let semA = 5 - comA;

    alert("Começa com A:" + comA +
        "\nSemA:" + semA);

}

function validarIdade() {
    let idade = 0;
    while (idade < 1 || idade > 120) {
        idade = parseInt(prompt("digite sua idade"))
        if (idade < 1) {
            alert("idade invalida");
        } else if (idade > 120) {
            alert("idade invalida");
        } else {
            alert("idade cadastra:" + idade);
        }
    }
}

function quemEalto() {
    let indice = 0;
    let maioraltura = 0;
    while (indice < 3) {

        let altura = parseFloat(prompt("Digite sua altura").replace(",", ".").trim());
        if (altura > maioraltura) {
            maioraltura = altura;
        }
        indice = indice + 1;
    }
    alert("a maior altura é:" + maioraltura.toFixed(2))
}

function menu() {
    let menu = `1 - Saudaçao 
2 - Par ou ímpar
100 - Sair`
    let escolha = 0;

    while (escolha !== 100) {
        escolha = parseInt(prompt(menu))
        if (escolha === 1) {
            validarSaudacao();
        } else if (escolha === 2) {
            parouImpar();
        } else if(escolha !== 100){
            alert("opção invalida");
        }
    }


}

function validarSaudacao() {
    const nome = prompt ("digite seu nome").trim();
    
    if( nome.length < 3 || nome.length > 150){
        alert("Nome inválido.");
    } else{
        alert("Olá sou " + " " + nome);
    }

}

function parouImpar() {
    let numero = parseInt(prompt("Digite um número").trim());

    if(numero % 2 ==0){
        alert(numero + " " + "é par");
    }else if (numero % 2 === 1){
        alert(numero + " " + " é impar");
    }

}

function ateFim(){
    let nome = " "; 
    let indice = 0;
    let nomeRegistrados = " ";
   while(nome.toLowerCase().trim() !== "fim"){
    nome = prompt("digite um nome")
    if(nome.toLowerCase().trim() !== "fim"){
        nomeRegistrados = nomeRegistrados + nome + "\n";
        indice = indice + 1;
    }
}
    alert("lista de nomes: " + nomeRegistrados + "quantidades de nomes" + indice);

   
}
function somaPreço(){
    let indice = 0;
    let soma = 0;
    while(indice < 4){
         let preco = parseFloat(prompt("digite o valor do produto").replace(",",".","R$", ""))

        soma = soma + preco;

        indice = indice + 1;
    }

    let media = soma / 4;

    alert("a soma dos valores é:" + " " + soma.toFixed(2) +
    "\nÉ a média:" + " " + media.toFixed(2))
}

function contarPerguntas(){
    let indice = 0; 
    let quantidadeInterrogacao = 0;
    let quantidadefrase = 0;
    while(indice < 5){
        let frase = prompt("digite uma frase com perguntas ou não")

        if (frase.toLowerCase().trimEnd().endsWith("?")){
           quantidadeInterrogacao = quantidadeInterrogacao + 1 ;
        } else{
            quantidadefrase = quantidadefrase + 1 ;
        }
           indice = indice + 1;
    }
    alert("números de perguntas: " + quantidadeInterrogacao + 
        "\nnúmeros de frases: " + quantidadefrase);
}