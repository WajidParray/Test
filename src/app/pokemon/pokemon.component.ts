import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { PokemonServiceService } from '../pokemon-service.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit{
	private PKM_URL = "http://localhost:8080/pokemonbox/pokemons";
	public responses : String [];
	
	public isAscendingSort: boolean = true;

	clickAsc(){
		this.isAscendingSort = true;
		console.log("Asc");
		this.getAllPokemonNames();
	}
	
	clickDec(){
		this.isAscendingSort = false;
		console.log("Dec");
		this.getAllPokemonNames();
	}
	
	
  constructor(private http: HttpClient) { 
  }

	ngOnInit(){
		this.getAllPokemonNames();
		
		
	}
	
	 getAllPokemonNames() {
	  
	 this.http.get<String []>(this.PKM_URL).subscribe(
	 (response) => {
		 
		 if(this.isAscendingSort){
			this.responses = response.sort();
		 }else{
			 this.responses = response.sort((one, two) => (one > two ? -1 : 1));
		 }
	 }
	 );
	 
  }
	
	
  
}
