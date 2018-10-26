import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Component } from '@angular/core';


import { Angular2TokenService } from "angular2-token-ionic3";

@Injectable()
export class ArticleProvider {
	private apiUrl: string = "articles";


	// I would recommend to implement login after the index feature is done
	// It is easier sending requests with the token service

	// If the article index API endpoint is ready before you guys finish the article index feature on the client
	// Then you need to use @angular/hhtp
	// Documentation: https://ionicframework.com/docs/native/http/

	// But if the API endpoint is not ready and you guys feel finished with the styling
	// I would merge the article index feature on the client with the mock data and then create a chore
	// to replace the "all()" method with the one that is actually sending a request to the backend
	// when the endpoint is ready

  response: Array<object> = [
		{
			"id":1,
			"title":"Help me clean my room",
			"details":"My room looks like shit",
			"categories":
				[{"id":5,"name":"Cleaning services"}]
		},
		{
			"id":2,
			"title":"Life insurance",
			"details":"If I die, I want a lot of money",
			"categories":
				[{"id":12,"name":"Insurance"}]
		}
	]
	constructor(public _tokenService: Angular2TokenService) {
    console.log('Hello ServiceRequestProvider Provider');
  }
// for mock

  all(): any {
		return Observable.create(observer => {
			observer.next(this.response);
		});
	}
	
// when the api endpoint is ready

	// all(): any {
	// 	return this._tokenService
	// 	.get(this.apiUrl)
	// 	.map(apiresponse => {
	// 		return apiresponse.json();
	// 	});
	// }
	
// For mock, for this one to work you need to make sure that the ids in the repsone variable go "1,2,3,4,5" etc

// Here we grab the id that got pushed from the article show page
// Then grab the correct article, in this mock version, from the reponse varaible
// And later when you guys have the api point ready
// we pass that id into the request 
  show(id: number) {
    return Observable.create(observer => {
      observer.next(this.response[`${id - 1}`])
    })
	}
	
// When the api endpoint is ready

	// show(id: number) {
	// 	return this._tokenService
	// 	.get(`${this.apiUrl}/${id}`)
	// 	.map(apiresponse => {
	// 		return apiresponse.json();
	// 	});
	// }
}
