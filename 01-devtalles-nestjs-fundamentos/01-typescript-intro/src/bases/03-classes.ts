import axios from "axios";
import {
  Move,
  PokeapiResponse,
} from "../interfaces/pokeapi-response.interface";

export class Pokemon {
  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }

  constructor(public readonly id: number, public readonly name: string) {}

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  talk() {
    console.log(`${this.name}, ${this.name}`);
  }

  async getMoves(): Promise<Move[]> {
    // const moves = 10;
    const { data } = await axios.get<PokeapiResponse>(
      "https://pokeapi.co/api/v2/pokemon/4"
    );

    return data.moves;
  }
}

export const charmander = new Pokemon(4, "Charmander");

// console.log(charmander);

// charmander.scream();
// charmander.talk();

// console.log(charmander.getMoves());
charmander.getMoves();
