import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PokedexComponent } from './pokedex/pokedex.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { getPokemonInformation } from './services';
import { EjemploComponent } from './components/ejemplo/ejemplo.component';

@NgModule({
  declarations: [
    PokedexComponent,
    EjemploComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    getPokemonInformation
  ],
  bootstrap: [PokedexComponent]
})

export class AppModule { }
