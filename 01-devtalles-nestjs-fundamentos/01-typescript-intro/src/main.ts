import { charmander } from "./bases/06-decorators";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Hello ${charmander.name}</h1>
    <p></p>
  </div>
`;
