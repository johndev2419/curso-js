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
        } else if (escolha !== 100) {
            alert("opção invalida");
        }
    }


}

function validarSaudacao() {
    const nome = prompt("digite seu nome").trim();

    if (nome.length < 3 || nome.length > 150) {
        alert("Nome inválido.");
    } else {
        alert("Olá sou " + " " + nome);
    }

}

function parouImpar() {
    let numero = parseInt(prompt("Digite um número").trim());

    if (numero % 2 == 0) {
        alert(numero + " " + "é par");
    } else if (numero % 2 === 1) {
        alert(numero + " " + " é impar");
    }

}

function ateFim() {
    let nome = " ";
    let indice = 0;
    let nomeRegistrados = " ";
    while (nome.toLowerCase().trim() !== "fim") {
        nome = prompt("digite um nome")
        if (nome.toLowerCase().trim() !== "fim") {
            nomeRegistrados = nomeRegistrados + nome + "\n";
            indice = indice + 1;
        }
    }
    alert("lista de nomes: " + nomeRegistrados + "quantidades de nomes" + indice);


}
function somaPreço() {
    let indice = 0;
    let soma = 0;
    while (indice < 4) {
        let preco = parseFloat(prompt("digite o valor do produto").replace(",", ".", "R$", ""))

        soma = soma + preco;

        indice = indice + 1;
    }

    let media = soma / 4;

    alert("a soma dos valores é:" + " " + soma.toFixed(2) +
        "\nÉ a média:" + " " + media.toFixed(2))
}

function contarPerguntas() {
    let indice = 0;
    let quantidadeInterrogacao = 0;
    let quantidadefrase = 0;
    while (indice < 5) {
        let frase = prompt("digite uma frase com perguntas ou não")

        if (frase.toLowerCase().trimEnd().endsWith("?")) {
            quantidadeInterrogacao = quantidadeInterrogacao + 1;
        } else {
            quantidadefrase = quantidadefrase + 1;
        }
        indice = indice + 1;
    }
    alert("números de perguntas: " + quantidadeInterrogacao +
        "\nnúmeros de frases: " + quantidadefrase);
}

function contarCupons() {
    let indice = 0;
    let quantidadeVip = 0;
    let quantidadeOff = 0;

    while (indice < 5) {
        let cupom = prompt("Digite um cupom:").toLowerCase().trim();

        if (cupom.startsWith("vip")) {
            quantidadeVip = quantidadeVip + 1;
        }


        if (cupom.endsWith("off")) {
            quantidadeOff = quantidadeOff + 1;
        }

        indice = indice + 1;
    }

    alert("Número de cupons VIP: " + quantidadeVip +
        "\nNúmero de cupons OFF: " + quantidadeOff);
}

function mostrarPrimeirosNomes() {
    let indice = 0;
    let listaDeNomes = "";

    while (indice < 3) {
        let nomeCompleto = prompt("Digite o nome completo da pessoa:");
        let partes = nomeCompleto.trim().split(" ");
        let primeiroNome = partes[0];
        let tresLetras = primeiroNome.substring(0, 3);

        listaDeNomes = listaDeNomes + primeiroNome + " (" + tresLetras + ")\n";
        indice = indice + 1;
    }

    alert("Primeiros nomes:\n" + listaDeNomes);
}

function sistemaDeCompras() {
    let desejaCadastrar = "sim";
    let total = 0;
    let quantidade = 0;
    let maisCaro = 0;
    let nomeMaisCaro = "";
    let relatorio = "Produto".padEnd(20, " ") + "Preço\n";

    while (desejaCadastrar === "sim") {
        let nomeProduto = prompt("Digite o nome do produto:").trim();

        if (nomeProduto.length < 2) {
            alert("Nome inválido. Tente novamente.");
            continue;
        }

        let precoBR = prompt("Digite o preço (formato BR, ex: R$ 1.299,90):");


        let precoLimpo = precoBR.replace("R$", "").replaceAll(" ", "").replaceAll(".", "").replace(",", ".");

        let preco = parseFloat(precoLimpo);


        if (preco <= 0) {
            alert("Preço inválido. Tente novamente.");
            continue;
        }


        total = total + preco;
        quantidade = quantidade + 1;

        if (preco > maisCaro) {
            maisCaro = preco;
            nomeMaisCaro = nomeProduto;
        }


        relatorio += nomeProduto.padEnd(20, " ") + "R$ " + preco.toFixed(2) + "\n";


        desejaCadastrar = prompt("Deseja cadastrar outro produto? (sim/não)")
            .toLowerCase().trim();
    }


    let media = quantidade > 0 ? (total / quantidade).toFixed(2) : "0.00";
    let resumo = relatorio +
        "\nTotal: R$ " + total.toFixed(2) +
        "\nMédia: R$ " + media +
        "\nProduto mais caro: " + nomeMaisCaro + " (R$ " + maisCaro.toFixed(2) + ")";

    alert(resumo);
}

function contarPontuação() {
    let indice = 0;
    let quantidadeInterrogacao = 0;
    let quantidadeEsclamacao = 0;
    let quantidadeFrases = 0;

    while (indice < 6) {
        let frase = prompt("digite uma frase com ou sem (!) ou (?) ");
        if (frase.toLowerCase().trimEnd().endsWith("?")) {
            quantidadeInterrogacao = quantidadeInterrogacao + 1;
        } else if (frase.toLocaleLowerCase().trimEnd().endsWith("!")) {
            quantidadeEsclamacao = quantidadeEsclamacao + 1;
        } else {
            quantidadeFrases = quantidadeFrases + 1;
        }
        indice = indice + 1;
    }
    alert("")

}

function cadastroEmail() {
    let email = " ";
    let indice = 0;
    let emailRegistrado = 0;
    let google = 0;
    let yahoo = 0;
    let outlook = 0;
    let outros = 0;

    while (email.toLowerCase().trim() !== "fim") {

        email = prompt("Digite seu Email");

        if (email.toLowerCase().trim() !== "fim") {
            emailRegistrado = emailRegistrado + email
        }





    }
}


function cadastrarTimeFutebol() {
    let indice = 0;

    let menorPeso = 999999999999;

    let menorPesoNome;

    let maiorPeso = 0;

    let maiorPesoNome;

    let maiorAltura = 0;

    let maiorAlturaNome;

    let maiorNome = "";

    let menorNome = Infinity.toString();

    let generoF = 0;

    let generoM = 0;

    let menorCartaoAmarelo = 99999999999;

    let menorCartaoAmareloNome = "";

    let maiorCartaoAmarelo = 0;

    let maiorCartaoAmareloNome = "";

    let maiorCartaoVermelho = 0;

    let maiorCartaoVermelhoNome = "";

    let menorCartaoVermelho = Infinity;

    let menorCartaoVermelhoNome = "";

    let separarDados = "-".padEnd(40, "-");

    while (indice < 22) {
        let nome = prompt("Digite seu nome").trim();

        if (nome.length > maiorNome.length) {
            maiorNome = nome;
        }

        if (nome.length < menorNome.length) {
            menorNome = nome;
        }

        let idade = parseInt(prompt("Digite sua idade").trim());

        let peso = parseFloat(prompt("Digite o peso").trim().replace(".", ","));

        if (peso < menorPeso) {
            menorPeso = peso;
            menorPesoNome = nome;
        };

        if (peso > maiorPeso) {
            maiorPeso = peso;
            maiorPesoNome = nome;
        };

        let genero = prompt("Digite o genêro (F/M)").trim();

        if (genero.toLowerCase() === "f") {
            generoF = generoF + 1;
        } else if (genero.toLowerCase() === "m") {
            generoM = generoM + 1;
        }

        let altura = parseFloat(prompt("Digite a altura").trim().replace(".", ","));

        if (altura > maiorAltura) {
            maiorAltura = altura;
            maiorAlturaNome = nome;
        }

        let quantidadeGol = parseInt(prompt("Digite a quantidades de gols marcados").trim());

        let quantidadeCartoesamarelo = parseInt(prompt("Digite as quantidades de cartões amarelos recibidos").trim());

        if (quantidadeCartoesamarelo < menorCartaoAmarelo) {
            menorCartaoAmarelo = quantidadeCartoesamarelo;
            menorCartaoAmareloNome = nome;
        }

        if (quantidadeCartoesamarelo > maiorCartaoAmarelo) {
            maiorCartaoAmarelo = quantidadeCartoesamarelo;
            maiorCartaoAmareloNome = nome;
        }

        let quantidadeCartoesvermelhos = parseInt(prompt("Digite as quantidades de cartões vermelhos recibidos").trim());

        if (quantidadeCartoesvermelhos > maiorCartaoVermelho) {
            maiorCartaoVermelho = quantidadeCartoesvermelhos;
            maiorCartaoVermelhoNome = nome;
        }
        if (quantidadeCartoesvermelhos < menorCartaoVermelho) {
            menorCartaoVermelho = quantidadeCartoesvermelhos;
            menorCartaoVermelhoNome = nome;
        }


        indice = indice + 1;
    }

    console.log("Jogador com o menor peso: " + menorPesoNome + "\n" + separarDados + 
        "\nJogador com a maior altura: " + maiorAlturaNome + 
        "\nAltura:" + maiorAltura + "\n" + separarDados + 
        "\nJogador com o maior nome: " + maiorNome + "\n" + separarDados + 
        "\nQuantidade de jogadores F:" + generoF +  
        "\nQuantidade de jogadores M: " + generoM + "\n"+ separarDados + 
        "\nJogador com menor quantidade de cartões amarelos: " + menorCartaoAmareloNome + 
        "\nQuantidade: " + menorCartaoAmarelo + "\n" + separarDados +
        "\nJogador com o menor nome: " + menorNome + "\n" + separarDados + 
        "\nJogador com o maior peso: " + maiorPesoNome + "\n" + separarDados + 
        "\nJogador com a maior quantidade de cartões vermelhos: " + maiorCartaoVermelhoNome + 
        "\nQuantidade: " + maiorCartaoVermelho + "\n" + separarDados +
        "\nJogador com maior quantidade de cartões amarelos: " + maiorCartaoAmareloNome + "\n" + separarDados +  
        "\nJogador com a menor quantidade de cartões vermelhos: " + menorCartaoVermelhoNome)
};







