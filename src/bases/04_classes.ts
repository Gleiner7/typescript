
// export class Usuario {
//     //Propiedades
//     nombre: string;
//     edad: number;

//     //Metodos
//     constructor(nombre: string, edad: number) {
//         this.nombre = nombre;
//         this.edad = edad;
//     }

//     saludar(): string {
//         return (`Hola, mi nombre es ${this.nombre} y tengo ${this.edad}`)
//     }
// }

// //Crear un objeto tipo usuario
// export const  userClass = new Usuario ("raul", 23);
// userClass.saludar();

//------------------------------------------------------------------------------------------------------------------------------


import axios from 'axios';
import type { RickapiResponse } from './interfaces/rickapi-response.interface';
type CharacterData = {
    image: string;
    name: string;
    status: string;
    id: number;
};

export class Usuario {
  //METODOS
    constructor(
    public id: number,
    public nombre: string,
    public edad: number
    ) { }

    get imageUrl(): string {
    return `https://imagenUser.com${this.id}`;
    }

    saludar(): string {
    return (`Hola, soy ${this.nombre} conn el id ${this.id}`);
    }

async getMoves(): Promise<CharacterData>{
    try {
        const { data } =  await axios.get <RickapiResponse>('https://rickandmortyapi.com/api/character/77');
        const { image = '', name = 'Desconoscido', status = 'N/A', id } = data;
        console.log(image);

        return { image, name, status, id };
    } catch (error) {
        console.error("Error al obtener datos:", error);
        throw error;
    }
    }
}
//Crear un objeto tipo Usuario
export const userClass = new Usuario(1, "Diego", 34);

userClass.getMoves();