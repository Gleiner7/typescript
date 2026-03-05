
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

// ---------------------------------------------------------------------------
// servicio simple de pokémon usado por el ejemplo de main.ts
export type PokemonCardData = {
    nombre: string;
    imagen: string;
    descripcion: string;
    id: number;
};

export class PokemonService {
    async getInitialList(limit: number): Promise<PokemonCardData[]> {
        const { data } = await axios.get<{ results: { name: string; url: string }[] }>(
            `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
        );

        const cards: PokemonCardData[] = [];
        for (let i = 0; i < data.results.length; i++) {
            const poke = data.results[i];
            const detail = await axios.get<any>(poke.url);

            // obtener descripción en inglés a partir del recurso de especie
            let descripcion = "";
            try {
                const speciesResp = await axios.get<any>(detail.data.species.url);
                const flavor = speciesResp.data.flavor_text_entries.find(
                    (e: any) => e.language.name === 'en'
                );
                descripcion = flavor ? flavor.flavor_text.replace(/\n|\f/g, ' ') : '';
            } catch (err) {
                console.warn('No se pudo obtener descripción para', poke.name, err);
            }

            cards.push({
                nombre: poke.name,
                imagen: detail.data.sprites.front_default,
                descripcion,
                id: i + 1,
            });
        }
        return cards;
    }
}

export const pokemonService = new PokemonService();