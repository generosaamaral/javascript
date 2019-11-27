function calcularImp() {
    var salario = document.getElementById("salario").value;
    console.log("salario digitado" + salario);
    var imposto;
    if (salario < 1000) {
        imposto = 0;
        //console.log("isento de imposto")
    }
    else {
        if (salario >= 1000 && salario < 2500) {
            imposto = salario * 0.125

            //console.log("Esse é o valor do imposto R$" + (salario * 0.125));  
        }
        else {
            if (salario >= 2500 && salario < 5000) {
                imposto = salario * 0.25
                //console.log("Esse é o valor do imposto R$" + (salario * 0.25));  
            }
            else {
                imposto = 1300
                //console.log("Esse é o valor do imposto R$" + 1300);  
            }
        }        

    }
    return imposto; //é o retorno do valor que está armazenado na variavel imposto
}


    function totalizar() {
        var salarioBruto = document.getElementById("salario").value;
        //console.log("salario bruto obtido ="+salarioBruto);
        var imposto = calcularImp();
        // console.log("imposto devido    =" +imposto);
        var salarioLiquido = salarioBruto - imposto;
        document.getElementById("resultado").innerHTML = "Imposto Devido R$" + imposto + "<br>" + " Salario Liquido R$ " + salarioLiquido + "<br>";
    }