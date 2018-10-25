import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ArticleProvider {
  result: Array<object> = [
		{
			"id":1,
			"title":"Help me clean my room",
			"details":"My room looks like shit",
			"categories":
				[{"id":5,"name":"Cleaning services"}]
		},
		{
			"id":2,
			"title":"Protect my feet and with that, my life",
			"details":"I will not be able to walk without my feet",
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
      observer.next(this.result[`${id - 1}`])
    })
  }
}
