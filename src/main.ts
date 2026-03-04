import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import {usuario} from './bases/02_objetos_interfaces'
import {users} from './bases/03_arrays'
import {name} from './bases/01_intro'
import {userClass} from './bases/04_classes'

console.log(userClass);
console.log(name);
console.log(usuario);
console.log(users);
userClass.saludar();



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    ${usuario.nombre}
    <br>${usuario.nombre}</br>
    ${users[0].nombre}
    <br>${userClass.saludar()}</br>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
