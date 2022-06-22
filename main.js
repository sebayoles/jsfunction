//Calculando del indice de masa muscular del usuario mediante una funcion

let nombreDeUsuario = prompt("Ingresa tu nombre")
let peso = Number(prompt("Indica tu peso solamente con numeros, sin usar puntos ni signos"));
let altura = Number(prompt("Ingresa tu altura solamente con numeros, separando metros de altura mediante un punto"));


/*
// IMM a mostrar 
let bajoPeso = 18.5;
let normal = 24.9;
let sobrePeso = 29.9;
let obesidadGradoUno = 34.9;
let obesidadGradoDos = 39.9;
let obesidadGradoTres = 40;
let mostrarStatusDeIndice = "";
let comparacion = false;
*/


function calculoIndiceMasaCorporal (peso, altura){
  let resultado = peso / (altura * altura);
 return resultado
}



 let mostrarResultado = calculoIndiceMasaCorporal (peso , altura); 
 alert("Hola " + nombreDeUsuario + " tu indice de masa muscular es " + mostrarResultado);










