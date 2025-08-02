function apresentarMensagemConsole() {
    console.log("hello world");
}
apresentarMensagemconsole();

function apresentarMensagemUsuario() {
    alert("minha primeira mensagem em JS para usuário")
}
// padrão de moneclatura de funções em JS camelcase//
function exemploVarisaveis() {
    //padrão de nomeclatura de variaveis em js é camelcase//
    let nummero1 = 7; // tipo inteiro
    let numero2 = 24; // tipo inteiro 
    let soma = numero1 + numero2;
    alert("soma:" + soma);
}

function exemploVariaveisString() {
    let nome = "john";
    let nomeComposto = "thiago";
    let sobrenome = "Doe";
    //o "+" tem função de soma e concatenação 
    // concatenção juntar duas coias "ana" "maria" "anamaria"
    //john thiago doe
    let nomeCompleto = nome + " "+ nomeComposto + " " + sobrenome;
    alert("Nome Completo :" + nomeCompleto)
}
function exemploVariaveisFloat() {
    let precoAbacaxi = 12.39;
    let precoSwitch2 = 4500.00;

    let total = precoAbacaxi + precoSwitch2
    alert("Total:" + total)
}

function exemploMercado(){
    let produto1Nome = "Cerveja";
    let produto1Quantidade = 12;
    let protuto1Preco = 5.30;
    let produto1Total = produto1Quantidade * protuto1Preco;

    let produto2Nome = "Amendoin";// string
    let produto2Quantidade = 2; // int
    let produto2Preco = 8.00; //float
    let produto2Total = produto2Quantidade * produto2Preco;

    let totalCompra = produto1Total + produto2Total;

    alert(
        "Produto 1:" + produto1Nome +
        "\nPreço unitário: " + produto1Quantidade +
        "\nValor: " + produto1Total +
        "\n\nProduto 2: " + produto2Nome +
        "\nPreço unitario: " + produto2Preco +
        "\nvalor: " + produto2Total +
        "\n\nTotal: " + totalCompra
    )
    
}