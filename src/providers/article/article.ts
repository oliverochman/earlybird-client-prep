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
			"title":"Life insurance",
			"details":"If I die, I want a lot of money",
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
