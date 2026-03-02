// export const usuario: {nombre: string; edad: number; activo: boolean } = {
//     nombre: 'Juan',
//     edad: 23,
//     activo: true
// }

//-------------------------------------------------------------------------------------------------

// interface Usuario {
//     nombre: string;
//     edad: number;
//     activo: boolean;
// }

// export const usuario: Usuario = {
//     nombre: 'Juan',
//     edad: 23,
//     activo: true
// };

//----------------------------------------------------------------------------------------------------

//Otra forma de escribir y tipar los datos con TYPE
type User = {
    nombre: string;
    edad: number;
    telefono?: number;
    activo: boolean;
}

export const usuario: User = {
    nombre: 'pepita',
    edad: 23,
    activo: true
};