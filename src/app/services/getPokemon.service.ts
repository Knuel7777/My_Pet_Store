import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import { PokemonInformation } from '../models';

@Injectable()
export class getPokemonInformation {
    pokemonApiUrl = 'https://pokeapi.co/api/v2/pokemon/';

    constructor(
        private http: HttpClient
    ) {}

    getInformation(request: string): Observable<PokemonInformation> {
        const pokemonUrl = this.pokemonApiUrl + request;

        const respuesta = new Observable<PokemonInformation> (observer => {
            this.http.get<PokemonInformation>(pokemonUrl)
            .subscribe (
                response => {
                    observer.next(response);
                    observer.complete();
                },
                error => {
                  observer.error(error);
                }
            )
        })

        return respuesta;
    }
}