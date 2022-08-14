// debugger
let valorDigitado = prompt("Digite um número");

function verificaNumero(){        
    while(isNaN(valorDigitado) || valorDigitado == null || valorDigitado == ''){
        alert("Digite apenas números")
        valorDigitado = prompt("Digite um número");       
    }
    return valorDigitado;    
}

function verificaParImpar(){
    resultadoPar =  ("<h3> O valor " + valorDigitado + " é um numero par.</h3>")
    resultadoImpar = ("<h3> O valor " + valorDigitado + " é um numero impar.</h3>")
    valorDigitado % 2 == 0 ? document.write(resultadoPar) : document.write(resultadoImpar);
}

verificaNumero();
verificaParImpar();