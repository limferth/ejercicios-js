// ejercico numero uno

//1. realizar una funcion que nos permita realizar las 4
//operaciones aritmeticas que nos permita sumar, restar,
//multiplicar. la funcion debe recibir 3 parametros c, 
//deben ser los valores (a, b) y uno el nombree de la 
//operacion (en mayuscula).
//
//si el parametro de la operacion no es valido que mande un error perzonalizado. 


function ejercicio1 (a, b, operation) {
	switch(operation) {
		case "suma":
			return console.log(a + b);
			break;
		case "resta":
			return console.log(a - b);
			break;
		case "multiplicacion":
			return console.log(a * b);
			break;
		case "division":
			return console.log(a / b);
			break;
		default:
			console.error(`la operacion $(operation) no es valida`);
	}
}

//EJECUCION DE FUNCIONES 

ejercicio1(12, 7, "division");
