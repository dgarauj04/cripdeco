var textInput = document.querySelector("#conteudo__texto");

var outInput = document.querySelector("#logo");

function criptografar(){
    var texto = textInput.value;

    var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById('logo').innerHTML = '<textarea readonly id="conteudo__texto">' + resultCripto + '</textarea>' + '<button class="btn_copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function descriptografar(){
    var texto = textInput.value;

    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    
    document.getElementById('logo').innerHTML = '<textarea readonly id="conteudo__texto">' + resultDescripto + '</textarea>' + '<button class="btn_copiar" id="copiar" onclick="copiar()">Copiar</button>';

}

function copiar(){
    var textoCop = document.getElementById('conteudo__texto');

    textoCop.select();
    document.execCommand('copy');
    alert("Texto Copiado");
}

// VENCER, VENCER, VENCER! UMA VEZ FLAMENGO, FLAMENGO ATÉ MORRER!
