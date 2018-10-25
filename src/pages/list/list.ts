import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ArticleProvider } from "./../../providers/article/article";
import { ArticleShowPage } from './../article-show/article-show';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
articles: any[];
canRender: boolean = false;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private articleProvider: ArticleProvider) {
  }
  ngOnInit():void {
    this.articleProvider.all().subscribe(data => {
      this.articles = data;
      this.renderMe();
    });
  }

  launchArticleShowPage(id) {
    this.navCtrl.push(ArticleShowPage, { article_id: id} )
  }

  renderMe() {
    this.canRender = true;
  }
}
