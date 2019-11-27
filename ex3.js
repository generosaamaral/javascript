var salMin= prompt("digite o valor do salário minimo");
var qtdeKw = prompt("digitea quantidade de Kw")

var valor1Kw = salMin /700;
var contatotal =valor1Kw * qtdeKw;
var valortotal = (contatotal * 90)/100;


document.write("valor de 1 Kw: R$" + valor1Kw+" <br/>");
document.write("valor total da conta: R$" + contatotal+ "<br/>");
document.write("valor com 10% de desconto: R$" + valortotal+ "<br/>");

console.log("valor de 1 Kw R$" +valor1Kw);
console.log("valor total R$" + contatotal);
console.log("valor com 10% de desconto R$" +valortotal);

alert("valor de 1 Kw R$:" + valor1Kw);
alert("valor total da conta: " + contatotal);
alert("valor com 105 de desconto:" + valortotal);