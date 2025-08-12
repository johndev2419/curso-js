function trocaPalavra() {
    let frase = prompt("digite uma frase");
    let palavraTrocar = prompt("qual palavra você deseja trocar?");
    let palavraNova = prompt("digite a palavra nova");

    let fraseAlterada = frase.replace(palavraTrocar, palavraNova);

    console.log("palavra modificda");
    console.log(fraseAlterada);
    alert("palavara modifica:" + " " + fraseAlterada)
}