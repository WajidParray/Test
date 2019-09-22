import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

	private PKM_URL = "http://localhost:8080/pokemonbox/pokemons";
	public response : any;
  constructor(private http: HttpClient) { 
  
  }
  
  
  
  getAllPokemonNames() {
	  
	 this.http.get(this.PKM_URL).subscribe(
	 (response) => {
		 this.response = response;
		 console.log(this.response);
		 
	 }
	 );

	 
	  
  }

  
  
}
