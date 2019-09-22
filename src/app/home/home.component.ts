import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { PokemonServiceService } from '../pokemon-service.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	private PKM_URL = "https://pokeapi.co/api/v2/pokemon/";
	public response : any;
	nameOfPKM : String= '';
	
  constructor(private http: HttpClient) { }

  ngOnInit() {
	  
	this.getPokemon();
  }

	getPokemon(){
	   this.http.get(this.PKM_URL +this.nameOfPKM).subscribe(
	 (response) => {
		 
		 this.response = response;
		 console.log(response);
	 }
	 );
	  
  }
  
 

  
  
}
