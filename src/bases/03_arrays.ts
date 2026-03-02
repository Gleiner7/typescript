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