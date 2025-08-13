function trocaPalavra() {
    let frase = prompt("digite uma frase");
    let palavraTrocar = prompt("qual palavra você deseja trocar?");
    let palavraNova = prompt("digite a palavra nova");

    let fraseAlterada = frase.replace(palavraTrocar, palavraNova);

    console.log("palavra modificda");
    console.log(fraseAlterada);
    alert("palavara modifica:" + " " + fraseAlterada)
}

function removerOcorrencia() {
    let frase2 = prompt("Digite uma frase:");
    let palavraRemover = prompt("Qual palavra você quer remover completamente?");
    let fraseSemOcorrencias = frase2.replaceAll(palavraRemover, "");
    console.log("Frase sem a palavra:", fraseSemOcorrencias);

}

function separarNomes() {
    let nomeCompleto = prompt("Digite seu nome completo:");
    let partesNome = nomeCompleto.split(" ");
    console.log("Primeiro nome:", partesNome);
    console.log("Último nome:", partesNome(partesNome.length - 1));
}

function parteFrase() {
    let frase3 = prompt("Digite uma frase:");
    let parteExtraida = frase3.substring(2, 8);
    console.log("Parte da frase:", parteExtraida);
}

function removerEspaços() {
    let textoComEspacos = prompt("Digite um texto com espaços no início e no fim:");
    console.log("Sem espaços extras:", textoComEspacos.trim());

}

function removerEspaçosinicio() {
    let textoInicio = prompt("Digite um texto com espaços no início:");
    console.log("Sem espaços no início:", textoInicio.trimStart());

}

function removerEspaçosfim() {
    let textoFinal = prompt("Digite um texto com espaços no final:");
    console.log("Sem espaços no final:", textoFinal.trimEnd());

}

function caracteres(){
    let telefone = prompt("Digite um número de telefone sem DDD:");
let telefoneComDDD = telefone.padStart(11, "47"); 
console.log("Telefone com DDD:", telefoneComDDD);

}
function peenchendoComzeros(){
    let conta = prompt("Digite o número da sua conta:");
let contaComZeros = conta.padEnd(10, "0");
console.log("Conta com zeros:", contaComZeros);

}

function preçoFormatado(){
    let valor = parseFloat(prompt("Digite um valor decimal:"));
console.log("Preço formatado: R$ " + valor.toFixed(2).replace(".", ","));
}