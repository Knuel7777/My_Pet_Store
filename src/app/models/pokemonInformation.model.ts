export interface PokemonInformation {
    name: string;
    sprites: Artwork;
}

export class Artwork {
    front_default: string;

    constructor(_front_default: string) {
        this.front_default = _front_default;
    }
}