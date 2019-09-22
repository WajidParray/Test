import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { PokemonServiceService } from '../pokemon-service.service';

@Component({
  selector: 'app-ability',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.css']
})
export class AbilityComponent implements OnInit {
	private PKM_URL = "http://localhost:8080/pokemonbox/abilities";
	public responses : String [];
	
	public isAscendingSort: boolean = true;

	clickAsc(){
		this.isAscendingSort = true;
		console.log("Asc");
		this.getAllAbilityNames();
	}
	
	clickDec(){
		this.isAscendingSort = false;
		console.log("Dec");
		this.getAllAbilityNames();
	}
	
  constructor(private http: HttpClient) { }

  ngOnInit(){
		this.getAllAbilityNames();
		
	}

	getAllAbilityNames() {
	  
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
