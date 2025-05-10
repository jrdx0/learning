import {
  Move,
  PokeapiResponse,
} from "../interfaces/pokeapi-response.interface";
import {
  HttpAdapter,
  PokeapiAdapter,
  PokeapiFetchAdapter,
} from "../api/pokeApi.adapter";

export class Pokemon {
  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }

  constructor(
    public readonly id: number,
    public name: string, // Todo: inyectar dependencias
    private readonly http: HttpAdapter
  ) {}

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  speak() {
    console.log(`${this.name}, ${this.name}`);
  }

  async getMoves(): Promise<Move[]> {
    const data = await this.http.get<PokeapiResponse>(
      "https://pokeapi.co/api/v2/pokemon/4"
    );

    return data.moves;
  }
}

const pokeapi = new PokeapiAdapter();
const pokeapiFetch = new PokeapiFetchAdapter();

export const charmander = new Pokemon(4, "Charmander", pokeapiFetch);

charmander.getMoves();
