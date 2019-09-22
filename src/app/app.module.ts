import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { AbilityComponent } from './ability/ability.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonServiceService } from './pokemon-service.service';
import { PokemonViewComponent } from './pokemon-view/pokemon-view.component';
import { AbilityViewComponent } from './ability-view/ability-view.component';
import { ReactiveFormsModule } from '@angular/forms'; 
const routes: Routes = [
	{
		path : '',
		component : HomeComponent,
		pathMatch : 'full'
	},
	
	{
		path : 'pokemons',
		component : PokemonComponent
	},
	{
		path : 'ability',
		component : AbilityComponent
	},
	
	{
		path : 'abilityView',
		component : AbilityViewComponent
	},
	{
		path : 'pokemonView',
	component : PokemonViewComponent
	},
	
	{
		path : '**',
		component : ErrorComponent
	}

];

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    AbilityComponent,
    NavigationComponent,
    ErrorComponent,
    HomeComponent,
    PokemonViewComponent,
    AbilityViewComponent
  ],
  imports: [
    BrowserModule,
	 RouterModule.forRoot(routes),
	FormsModule,
	ReactiveFormsModule,
	HttpClientModule
	
  ],
  providers: [PokemonServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {


	}
