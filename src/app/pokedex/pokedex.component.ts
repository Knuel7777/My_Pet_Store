import { Component, OnInit } from '@angular/core';
import { getPokemonInformation } from '../services';


@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})

export class PokedexComponent implements OnInit {
  view = false;
  numPokemon : string = '';
  namePokemon : string = '';
  imgPokemon : string = '';


  constructor(
    public getPokemonInformation: getPokemonInformation
  ) { }

  ngOnInit(): void {
  }

  getPokemon() {
    this.getPokemonInformation.getInformation(this.numPokemon)
    .subscribe(response => {
      this.imgPokemon = response.sprites.front_default;
      this.namePokemon = response.name;
      this.view = true;
    }, error => {
      alert(error);
    })
  }
}
