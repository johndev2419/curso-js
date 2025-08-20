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

function contagemInicial(){
    let indice = 0; 
    let comA = 0;
     while(indice < 5){
        let palavra = prompt("digite uma palavra:").toLocaleLowerCase().trim();

        if(palavra.startsWith("a")){
            comA = comA + 1;
        }

        indice = indice + 1;
       
     }
      let semA = 5 - comA;

       alert("Começa com A:" + comA +
        "\nSemA:" + semA );
       
}
