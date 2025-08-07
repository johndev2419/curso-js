//escopo de variável saldo é global
let saldo = 200.00;

function sacar() {
    //escopo da variável valorSaque é a função sacar
    const valorSaque = parseFloat(
        prompt("digite o valor do saque", "R$")
            .replace(",", ".")
            .replace("R$", "")
            .replace(" ", "")
    );



    if (valorSaque > saldo) {
        alert("saldo insuficiente")
    } else {
        const confirmacao = confirm("Deseja realmente realizar o saque?");

        if (confirmacao === true) {
            saldo = saldo - valorSaque;
        }
    }
}



function apresentarSaldo() {
    alert("saldo atual: R$" + saldo.toFixed(2).replace(".", ","));
}
function depositar() {
    const ValorDeposito = parseFloat(
        prompt("Digite o valor do deposito", "R$")
            .replace(",", ".")
            .replace("R$", "")
            .replace(" ", "")

    );

    if (ValorDeposito <= 0) {
        alert("valor do deposito não pode ser menor ou igual a r$ 0,0");
        depositar();
        //recursao, metodo que chama ele mesmo 
    } else {
        saldo = saldo + ValorDeposito;
    }
}

function exemploOperadoreslogicoE(){
    const login = prompt("Digite o login");
    const senha = prompt("Digite a senha");

}
