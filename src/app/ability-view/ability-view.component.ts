import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { PokemonServiceService } from '../pokemon-service.service';
@Component({
  selector: 'app-ability-view',
  templateUrl: './ability-view.component.html',
  styleUrls: ['./ability-view.component.css']
})
export class AbilityViewComponent implements OnInit {
	//private PKM_URL = "https://pokeapi.co/api/v2/ability/";
	
	private PKM_URL = "http://localhost:8080/pokemonbox/abilities/";
	public response : any;
	

  constructor(private route: ActivatedRoute,private http: HttpClient) {}

  ngOnInit() {
		console.log(this.route.snapshot.queryParams['key']);
		this.getAbility(this.route.snapshot.queryParams['key']);
		
  }
  
  getAbility(name : String){
	   this.http.get(this.PKM_URL +name).subscribe(
	 (response) => {
		 
		 this.response = response;
		 
		 console.log(response);
	 }
	 );
	  
  }

}
