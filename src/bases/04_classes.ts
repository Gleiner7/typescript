
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
import type { PokeapiResponse } from './PokeApi';

// Definimos qué datos queremos extraer de pokenApi
export type PokemonData = {
    nombre: string;
    experiencia: number;
    habilidadPrincipal: string;
}

export class Usuario {
    constructor(
        public id: number,
        public nombre: string,
                public edad: number
    ) {} 
    async getPokemonInfo(): Promise<PokemonData> {
        try {
            // Usamos la URL de la imagen: pokeapi
            const { data } = await axios.get<PokeapiResponse>(`https://pokeapi.co/api/v2/pokemon/ditto`);
                        return {
                nombre: data.name,
                experiencia: data.base_experience,
                habilidadPrincipal: data.abilities[0].ability.name
            };
        } catch (error) {
            console.error("Error al obtener datos de Pokémon:", error);
            throw error;
        }
    }
}
export const userClass = new Usuario(1, "Diego", 36);