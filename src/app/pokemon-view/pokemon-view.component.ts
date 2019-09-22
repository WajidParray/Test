import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { PokemonServiceService } from '../pokemon-service.service';

@Component({
  selector: 'app-pokemon-view',
  templateUrl: './pokemon-view.component.html',
  styleUrls: ['./pokemon-view.component.css']
})
export class PokemonViewComponent implements OnInit {
	private PKM_URL = "https://pokeapi.co/api/v2/pokemon/";
	public response : any;
	
  constructor(private route: ActivatedRoute,private http: HttpClient) { }

  ngOnInit() {
	console.log(this.route.snapshot.queryParams['key']);
	this.getPokemon(this.route.snapshot.queryParams['key']);
  }
  
  getPokemon(name : String){
	   this.http.get(this.PKM_URL +name).subscribe(
	 (response) => {
		 
		 this.response = response;
		 console.log(response);
	 }
	 );
	  
  }

}
