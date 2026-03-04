export interface user {
    nombre: string;
    edad: number;
    activo: boolean;
}

const jairo: user = {
    nombre: "jairo",
    edad: 23,
    activo: true
}

const juan: user = {
    nombre: "juan",
    edad: 23,
    activo: true
}

export const users: user[] = [jairo,juan];

users.push(jairo,juan);

console.log(users);

//--------------------------------------------------------------------------------------------------------------------------
//Tipos de arreglos (Arrays) 

//Forma 1: Usando []
// let numeros: number[] = [1,2,3,4,5,6,7,8,9,10];
// let nombres: string[] = ["Diego","Ana","Carlos"];

// //Forma 2: Usando <tipo>
// let numeros2: Array<number> = [1,2,3,4,5,6,7,8,9,10];
// let nombres2: Array<string> = ["Diego","Ana","Carlos"];

// //  Multiples uniones
// const mezcla: (number | string)[] = [1,"Diego",2,"Carlos"]; 

// //Si es un objeto, se pude usar interfaces o tipos
// interface Usuario {
//     nombre: string;
//     edad: number;
// }

// let usuarios: Usuario[] = [
//     {nombre: "Diego", edad: 23},
//     {nombre: "Ana", edad: 25},
//     {nombre: "Carlos", edad: 20}
// ];
