let numero   
while(isNaN( numero )){
     numero = parseInt(prompt( "Insira um numero para visualizar sua tabuada" ))
     if(isNaN( numero )){
        alert( "Insira apenas números" )
     }    
}

for ( let i = 0; i <= 10; i++ ) {
    resultado = numero * i
    document.write( numero + "x" + i + "=" + resultado + "<br>" )
}
