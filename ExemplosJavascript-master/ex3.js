var salMin = prompt("Digite o valor do Salario Minimo");
var qtdeKw = prompt("Digite a quantidade de Kw");

var valor1Kw = salMin / 700;
var valorTotal = valor1Kw * qtdeKw;
var valorDesc = valorTotal * 0.9;

document.write("Valor de 1 Kw: R$ "+valor1Kw+"<br/>");
document.write("Valor total da conta: R$"+valorTotal+"<br/>");
document.write("Valor com 10% de desconto: R$"+valorDesc+"<br/>");

console.log("Valor de 1 Kw R$ "+valor1Kw);
console.log("Valor total da conta R$ "+valorTotal);
console.log("VAlor com 10% de desconto R$ "+valorDesc);

alert("Valor 1kw R$ "+valor1Kw);
alert("Valor total R$ "+valorTotal);
alert("Valor com 10% de desconto R$ "+valorDesc);
