
let i = 0
let naoGostaram = 0

while(i<4){   
    debugger
    let escolha = prompt("Qual nota você daria para Stranger Things ?").toLowerCase()
    switch(escolha){
        case "ruim":
            naoGostaram++
            i++
            break;
        case "bom":
            i++
            break;
        case "excelente":
            i++
            break;
        default:
            alert("Por gentileza, digite se você achou a série\nRuim\nBom\nExcelente")
    }    
}
if(naoGostaram){
    alert("quantidade de pessoas que não gostaram da série: " + naoGostaram)
}
else{
    alert("Todos gostaram! ^-^")
}
