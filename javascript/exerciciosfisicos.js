
function calcularIMC(){
let massa = document.getElementById ("massa") .value;
let altura = document.getElementById("altura").value;
console.log ("Massa:"+massa);
console.log("Altura:"+altura);
let imc = massa/ (altura**2)
document.getElementById("resultado").innerHTML = "Resultado: "+imc
}
