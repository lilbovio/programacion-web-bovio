var numero = 10;
console.log("El numero es" + numero);

console.log("Hola Mundo");
document.write("Hola Mundo en la pagina");

console.error("mi error");
console.warn("mi warning");

var numero1 = 100;
var numero2 = 10;

console.log("La suma es" + " " + (numero1+numero2));
console.log("La multiplicacion es" + " " + (numero1*numero2));
console.log("La division es" + " " + (numero1/numero2));
console.log("La modulo es" + " " + (numero1%numero2));

var boolean = true;

if( boolean == true){
    console.log("Es verdadero");
} else {
    console.log("Es falso");
}   

var tipoTarjeta = "Credit Card";

switch(tipoTarjeta){
    case "Credit Card":
        console.log("Tarjeta de credito");
        break;
    case "Debit Card":
        console.log("Tarjeta de debito");
        break;
    case "Money":
        console.log("Dinero en efectivo");
        break;
    default:
        console.log("Otro metodo de pago");
        break;
}

var nombres = ["Ana", "Luis", "Carlos", "Mariana"];

for(var i = 0; i < nombres.length; i++){
    console.log("Nombre:" + " " + nombres[i]);
}

console.table(nombres);

nombres[2] = "Pedro";
console.log(nombres);

var nombres2 = ["Sofia", "Diego" , "Valeria", "Jorge", "Lucia", "Miguel", "Isabella", "Sebastian", "Camila", "Daniel"];
console.log(nombres2);
nombres2.splice(3);
console.log(nombres2);
nombres2.push("Fernando");
console.log(nombres2);

nombres2.splice(2, 1);
console.log(nombres2);


const arrayNums = [1,2,3,4,5,6,7,8,9,10];
const arrayNums2 = [11,12,13,14,15,16,17,18,19,20];

console.log("-----------------------SPREAD OPERATOR---------------------------");

console.log("Array 1:" + " " + arrayNums);
console.log("Array 2:" + " " + arrayNums2);

const arrayNumsTotal = [...arrayNums, ...arrayNums2];
console.log("Array Total:" + " " + arrayNumsTotal);