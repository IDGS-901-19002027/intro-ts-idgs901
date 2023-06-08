
let vector1:Array<number>=[9,8,7,6];
vector1.push(10); // Agregar nuevo elemento
vector1[1] = 5; // Agregar un elemento en cierta posición

for (let tem of vector1){
    console.log(tem);
}

let tem:(number|string)[]=[]
tem.push('Mario');
tem.push(123);

// Creación de una interfaz
interface Alumno {
    matricula?:number; // ? Es opcional el dato
    nombre:string;
    edad:number;
    email:string;
}

// Definición de objetos
const alumno:Alumno = {
    matricula:2005,
    nombre:'Mario',
    edad: 23,
    email: 'mario@gmail.com'
}

console.table(alumno);