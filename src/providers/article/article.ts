import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';


/*
  Generated class for the ArticleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ArticleProvider {
  result: Array<object> = [
		{
			"id":1,
			"title":"Help me clean my room",
			"details":"My room looks like shit",
			"state":"new",
			"image":
				"https://cdn.pixabay.com/photo/2016/06/18/17/42/image-1465348_960_720.jpg",
			"categories":
				[{"id":5,"name":"Cleaning services"}]
		},
		{
			"id":2,
			"title":"Protect my feet and with that, my life",
			"details":"I will not be able to walk without my feet",
			"state":"new",
			"image":
        "https://cdn.pixabay.com/photo/2016/06/18/17/42/image-1465348_960_720.jpg",
			"categories":
				[{"id":12,"name":"Insurance"}]
		}
	]

  all(): any {
		return Observable.create(observer => {
			observer.next(this.result);
		});
  }
  
  show(id: number) {
    return Observable.create(observer => {
      observer.next(this.result[`${id}`])
    })
  }
}
