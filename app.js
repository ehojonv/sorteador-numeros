document.getElementById("btn-reiniciar").disabled = true;
function sortear(){
    let qntdNum = parseInt(document.getElementById("quantidade").value);
    let numMin = parseInt(document.getElementById("de").value);
    let numMax = parseInt(document.getElementById("ate").value); 

    if (qntdNum > (numMax-numMin)+1 || qntdNum < 1 || isNaN(qntdNum) || isNaN(numMin) || isNaN(numMax)){
        trocarTexto("resultado",`<label class="texto__paragrafo">Impossível sortear com esses parâmetros.</label>`);
    } else {

    let escolhidos = [];
    let numero;

    for (let i = 0; i<qntdNum; i++){
     numero = gerarNumAleatorio(numMin,numMax);

     while (escolhidos.includes(numero)){
        numero = gerarNumAleatorio(numMin,numMax);
     };
     escolhidos.push(numero);
    };
    escolhidos.sort((a,b) => a-b);
    trocarTexto("resultado",`<label class="texto__paragrafo">Números sorteados: ${escolhidos}.</label>`);
    alterarBtn("btn-reiniciar");
    alterarBtn("btn-sortear");
    };
};

function alterarBtn(tag){
    let btn = document.getElementById(tag);
    if (btn.classList.contains("container__botao-desabilitado")){
        btn.classList.remove("container__botao-desabilitado");
        btn.classList.add("container__botao");
        btn.disabled = false;
    } else {
        btn.classList.remove("container__botao");
        btn.classList.add("container__botao-desabilitado");
        btn.disabled = true;
    };
};

function trocarTexto(tag,texto){
    let campo = document.getElementById(tag);
    campo.innerHTML = texto;
};

function reiniciar(){
    alterarBtn("btn-reiniciar");
    alterarBtn("btn-sortear");
    trocarTexto("resultado","");
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
};

function gerarNumAleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1))+min;
};