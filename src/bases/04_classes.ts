export class Usuario {
    //Propiedades
    nombre: string;
    edad: number;

    //Metodos
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(): string {
        return (`Hola, mi nombre es ${this.nombre} y tengo ${this.edad}`)
    }
}

//Crear un objeto tipo usuario
export const  userClass = new Usuario ("raul", 23);
userClass.saludar();