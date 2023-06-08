/*
    TypeScript: Lenguaje con tipos estaticos que permite detectar 
    errores de asignación en tiempo de desarrollo
*/ 

// Definición de variables
var num1 = 23; // Global
let num2 = 'dos'; // Alcance límitado
const num3 = 34; // Constante

// Definición para typescript
let version = 2.2; // -> No se le puede asignar otro valor ya inicializada.
version = 3.3;

let version2 : number = 2.2 // Después de los dos puntos se le asigna el tipo de dato
let version3 : string = "Versión 2.2";

let nombre:string = "Roberto";
let activo:boolean = true;

let matricula:number | string | boolean = 1234; // Asignar diferentes aceptaciones de tipos de datos
matricula='1234';

// Definición de arreglos
let vector:Number[] = [1,2,3,4,5];

//console.log(vector);