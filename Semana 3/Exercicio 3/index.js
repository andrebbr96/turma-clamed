let numeros = [2,3,5,8]

debugger
const retornaQtdParImpar = function( num = [] ){
    let par = 0
    let impar = 0  
    let total = num.length 
    num.forEach( element => {
        if( element % 2 == 0 ){
            par++;
        }else{
            impar++;
        }       
    } )
    return [par, impar, total]
}


alert( "A quantidade informada foi: " + retornaQtdParImpar(numeros)[2] +
       "\nValores pares: " + retornaQtdParImpar(numeros)[0] +
       "\nValores impares: " + retornaQtdParImpar(numeros)[1] )