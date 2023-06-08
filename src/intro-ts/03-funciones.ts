// Declaración de funciones
function sumar(a:number,b:number):void{
    console.log(a+b);
}

let suma = sumar(10, 10);
console.log(suma);

function restar(a:number,b:number):void{
    console.log(a-b);
}

let resta = sumar(10, 10);
console.log(resta);

function sumar2(a:number,b:number):number{
    //let tem = a + b;
    return a+b;   
}

function operasBas(n1:number, n2:number, n3:number):number{
    let tem = n1 * n3;
    return tem;
}

console.log(operasBas(3,0,5));

// Pasar objetos a las funciones
interface Mascota{
    nombre:string;
    edad:number;
    mostrarEdad:()=>void; 
}

function calcularEdad(mascota:Mascota, x:number):void{
    mascota.edad+=x;
    console.log(mascota);
}

const nuevaMascota:Mascota={
    nombre : "Miau",
    edad: 3,
    mostrarEdad(){
        console.log('La edad es: ', this.edad);
    }
}

calcularEdad(nuevaMascota, 2);

// Función anonima es aquella que puede ser asignada pero no tiene nombre
const funcSumar=function(n1:number, n2:number):number{
    return n1+n2;
}

console.log(funcSumar(4,9));