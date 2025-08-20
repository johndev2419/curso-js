/*  CADERNO
------------------------ COMO DEPURAR --------------------------
Debug => Depurar (ir analisando o código linha a linha, para entender pq está ou n funcionando)
Breakpoint => Ponto de parada (quando chegar naquela linha ele para)
Step over (F10) => Vai para a próxima linha 
Step into (F11) => Entrar na função ou ir para a próxima linha
Resume (F8) => Continuar até encontrar outro breakpoint
Ex.: de chamar uma função: nomeDaFuncao()
Ex.: de chamar uma função prompt("asodjaosdj")
----------------------------------------------------------------
*/
function exemploWhile01() { // CADERNO + PC
    // Solicitar quais os 5 itens da compra do mercado 
    // Dado que preciso solicitar dados para uma quantidade definida, utilizo o indice
    let indice = 0; // Indice sempre começa com 0 do tipo inteiro
    while (indice <= 4) { // enquanto indice for menor ou igual a 5, repetir
        let item = prompt("Digite o nome do item");

        // Incrementar
        indice = indice + 1;
    }
}

function exemploWhile02(){
    let indice =0 
    while( indice < 3 ){
        let nick = prompt("Digite seu nick").trim();
        let partidas = parseInt(prompt("Digite os numeros de partidas"));
        let percas = parseInt(prompt("Digite numeros de percas"));
        let pdl= parseInt(prompt("digite o pdl"));

        indice = indice + 1;

    }

}

function descobrirMaioraltura(){
    let indice = 0;
    let maioraltura = 0;
    while(indice < 13){
        let altura = parseFloat(prompt("Digite a altura").replace("," , "."));
        if(altura > maioraltura){
            maioraltura = altura;
        }
    }
    alert("Maior altura:" + maioraltura);
} 

function descobrirMenoridade(){
    debugger;
    let indice = 0;
    let menoridade = 9999;
    while( indice < 3){
        let nome = prompt("digite seu nome");
        let idade = parseInt(prompt("digite sua idade"));
        if(idade < menoridade){
            menoridade = idade;
        }
        indice = indice + 1;
    }
    alert("menor idade:" + menoridade);
}

function solicitarAtedigitafim(){
    let nome = " ";
    while(nome.toLocaleLowerCase().trim() !== "fim"){
        nome = prompt("digite o nome ou (fim) para encerrar");
        alert("nomee:" + nome)
    }
}
function sistemaComMenu() {
    let menu = `Sistema:
    01 - Solicitar itens para compra mercado
    02 - Solicitar nome de 3 pessoas
    03 - Descobrir Maior Altura
    04 - Descobrir Menor Idade
    05 - Solicitar Ate Digitar Fim
    06 - Descobrir a quantidade de determinado texto
    07 - Descobrir a quantidade começa com 
    08 - Descobrir a quantidade termina com
    09 - Solicitar se deseja cadastrar outro
    10 - Solicitar a quantidade desejada para repetir
    11 - Validar texto até digitar corretamente
    12 - Validar int até digitar corretamente
    13 - Exemplo com várias validações
    100 - Sair
    Digite a opção escolhida`;
    let opcaoEscolhida = 0;
    while (opcaoEscolhida !== 100) {
        opcaoEscolhida = parseInt(prompt(menu));
        debugger
        if (opcaoEscolhida === 1) {
            exemploWhile01();
        } else if (opcaoEscolhida === 2) {
            exemploWhile02();
        } else if (opcaoEscolhida === 3) {
            descobrirMaiorAltura();
        } else if (opcaoEscolhida === 4) {
            descobrirMenorIdade();
        } else if (opcaoEscolhida === 5) {
            solicitarAteDigitarFim();
        } else if (opcaoEscolhida === 6) {
            descobrirQuantidadeDeterminadoTexto();
        } else if (opcaoEscolhida === 7) {
            descobrirQuantidadeComecaCom();
        } else if (opcaoEscolhida === 8) {
            descobrirQuantidadeTerminaCom();
        } else if (opcaoEscolhida === 9) {
            descobrirSeDesejaCadastrarOutro();
        } else if (opcaoEscolhida === 10) {
            descobrirQuantidadeParaCadastrar();
        } else if (opcaoEscolhida === 11) {
            validarString();
        } else if (opcaoEscolhida === 12) {
            validarInt();
        } else if (opcaoEscolhida === 13) {
            exemploComVariasValidacoes();
        } else if (opcaoEscolhida !== 100) {
            alert("Opção inválida");
        }
    }
}

// while descobrir a quantidade de determinado texto
function descobrirQuantidadeDeterminadoTexto() {
    let indice = 0;
    let quantidadeSc = 0;
    let quantidadeRs = 0;
    while (indice < 5) {
        let estado = prompt("Digite o nome do estado");

        if (estado === "SC") {
            // Se caiu aqui é pq é de Santa Catarina, ou seja,
            // vou incrementar a variável de quantidade de sc
            // pois o colab é de SC
            quantidadeSc = quantidadeSc + 1;
        } else if (estado === "RS") {
            quantidadeRs = quantidadeRs + 1;
        }

        indice = indice + 1;
    }
    alert(
        "Quantidade SC: " + quantidadeSc +
        "\nQuantidade RS: " + quantidadeRs
    )
}

// while descobrir a quantidade começa com Batata
function descobrirQuantidadeComecaCom() {
    let indice = 0;
    let quantidadeBatata = 0, quantidadeOutrosProdutos = 0;
    while (indice < 5) {
        let produto = prompt("Digite o nome do produto");

        if (produto.toLowerCase().startsWith("batata")) {
            quantidadeBatata = quantidadeBatata + 1;
        } else {
            quantidadeOutrosProdutos = quantidadeOutrosProdutos + 1;
        }

        indice = indice + 1;
    }
    alert(
        "Quantidade Batata: " + quantidadeBatata +
        "\nQuantidade Outros Produtos: " + quantidadeOutrosProdutos
    )
}

// while descobrir a quantidade termina com LTDA
function descobrirQuantidadeTerminaCom() {
    let indice = 0;
    let quantidadeEmpresasLtda = 0;
    while (indice < 5) {
        let empresa = prompt("Digite o nome da empresa");

        if (empresa.toLowerCase().endsWith("ltda")) {
            quantidadeEmpresasLtda = quantidadeEmpresasLtda + 1;
        }

        indice = indice + 1;
    }

    let quantidadeEmpresasNaoLtda = indice - quantidadeEmpresasLtda;
    alert(
        "Quantidade empresas LTDA: " + quantidadeEmpresasLtda +
        "\nQuantidade empresas não LTDA: " + quantidadeEmpresasNaoLtda
    )
}

// while solicitar se deseja cadastrar outro
function descobrirSeDesejaCadastrarOutro() {
    let desejaCadastrar = "sim";
    while (desejaCadastrar === "sim") {
        let empresa = prompt("Digite o nome da empresa");

        desejaCadastrar = prompt("Deseja cadastrar outra? [sim/não]").toLowerCase().trim();
    }
}

// while solicitar a quantidade desejada para repetir
function descobrirQuantidadeParaCadastrar() {
    let quantidadeDesejada = parseInt(prompt("Digite a quantidade de empresas para cadastrar"));
    let indice = 0;
    while (indice < quantidadeDesejada) {
        let empresa = prompt("Digite o nome da empresa");

        indice = indice + 1;
    }
}


// while com validação de string
function validarString() {
    let cnpj = "";
    while (cnpj.length !== 18) {
        cnpj = prompt("Digite o CNPJ (00.000.000/0000-00)").trim();

        if (cnpj.length !== 18) {
            alert("CNPJ incorreto, no mínimo e no máximo 18 caracteres");
        }
    }
}

function validarInt() {
    let quantidadeColaboradores = 0;
    // min: 1
    // max: 100
    while (quantidadeColaboradores < 1 || quantidadeColaboradores > 100) {
        quantidadeColaboradores = parseInt(prompt("Digite a quantidade de colaboradores"));

        if (quantidadeColaboradores < 1) {
            alert("Mínimo de 1 colaborador");
        } else if (quantidadeColaboradores > 100) {
            alert("Máximo de 100 colaboradores");
        }
    }
}

function exemploComVariasValidacoes() {
    let quantidadeDesejada = 0;
    while (quantidadeDesejada < 1) {
        quantidadeDesejada = parseInt(prompt("Digite a quantidade de empresas para cadastrar"));

        if (quantidadeDesejada < 1) {
            alert("No mínimo 1 empresa");
        }
    }

    let indice = 0;
    while (indice < quantidadeDesejada) {
        let empresa = "";
        while (empresa.length < 3 || empresa.length > 120) {
            empresa = prompt("Digite o empresa").trim();

            if (empresa.length < 3 || empresa.length > 120) {
                alert("empresa incorreto, no mínimo 3 caracteres e no máximo 120 caracteres");
            }
        }

        let cnpj = "";
        while (cnpj.length !== 18) {
            cnpj = prompt("Digite o CNPJ (00.000.000/0000-00)").trim();

            if (cnpj.length !== 18) {
                alert("CNPJ incorreto, no mínimo e no máximo 18 caracteres");
            }
        }

        let quantidadeColaboradores = 0;
        while (quantidadeColaboradores < 1 || quantidadeColaboradores > 100) {
            quantidadeColaboradores = parseInt(prompt("Digite a quantidade de colaboradores"));

            if (quantidadeColaboradores < 1) {
                alert("Mínimo de 1 colaborador");
            } else if (quantidadeColaboradores > 100) {
                alert("Máximo de 100 colaboradores");
            }
        }

        indice = indice + 1;
    }
}
function exemploSoma(){
    let indice = 0;
    let soma = 0;
    while (indice < 3) {
        let idade = parseInt(prompt("Digite a idade"));

        soma = soma + idade;

        indice = indice + 1;
    }
    alert("Soma: " + soma)
}

// while com validação de int
// while com ou
// while com e




// while com while validando string/int
