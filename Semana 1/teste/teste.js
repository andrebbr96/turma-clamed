const valores = [1,5,3,10,4,6];
let maiorValor = valores.reduce(function(anterior, atual) { 
	return anterior > atual ? anterior : atual; 
});