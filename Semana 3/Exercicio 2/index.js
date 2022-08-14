let frutas = ["maçã", "pêra", "melância", "banana"]

function imprimeElementosRetornaTamanho( lista=[] ){
    lista.forEach( element => {
        alert( element )
    } );
    return lista.length
}

imprimeElementosRetornaTamanho( frutas )

