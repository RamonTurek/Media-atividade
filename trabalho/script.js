const inputArea = document.getElementById("id_input")
const botaoArea = document.getElementById("id_botao")
const inputArea2 = document.getElementById("id_input2")
const botaoArea2 = document.getElementById("id_botao2")

var resultado;

botaoArea.onclick = function(){
    const ladoQuadrado = document.getElementById("id_input").value
    resultado = Math.pow(ladoQuadrado,2)
    document.getElementById("id_respota").innerHTML = "A área do quadrado é: "+resultado
}

function areaQuadrado1(){
    const ladoQuadrado = document.getElementById("id_input2").value
    resultado = Math.pow(ladoQuadrado,2)
    document.getElementById("id_respota2").innerHTML = "A área do quadrado é: "+resultado
}

function areaCirculo(raio = 1){
    console.log("Função areaCirculo - Função declarada por bloco");
    return Math.PI * (raio ** 2);
}
let x = areaCirculo(5);
console.log(`Área do círculo é ${x}cm²`);
