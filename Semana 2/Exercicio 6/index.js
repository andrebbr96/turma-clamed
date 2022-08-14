// debugger


function verificaPeso(numero){
    if(numero != null && !isNaN(numero) && numero != ''){
        return false;
    }
    return true;
}     
 

function verificaAltura(numero){
    if(numero != null && !isNaN(numero) && numero != ''){
        return false;
    }
    return true;               
}
       


function calculaImc(peso,altura){
    let calculo = peso/(altura*altura);
    // document.write("<h3>" + calculo + "</h3>"); //usando para conferir o valor do calculo
    return calculo;
}

function verificaImc(imcCalculado){
    
    if(imcCalculado >= 25){
        alert("Você está acima do peso, procure um médico");
        return;
    }
    if(imcCalculado >= 18.5 && imcCalculado <= 24.9){
        document.write("<h3>PARABÉNS!! Você está no peso ideal</h3>")
        return;
    }
    document.write("<h3>Você está abaixo do peso, procure um médico</h3>")
}

let pesoDigitado = prompt("Digite seu peso");
while(verificaPeso(pesoDigitado) == true ){
     pesoDigitado = prompt("Digite seu peso");
}       
let altura = prompt("Digite sua altura");
while(verificaAltura(altura) == true){
    altura = prompt("Digite sua altura");
}

let retornoCalculo = calculaImc(pesoDigitado,altura);

calculaImc(pesoDigitado,altura);

verificaImc(retornoCalculo);