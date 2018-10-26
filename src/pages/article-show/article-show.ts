import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ArticleProvider } from "./../../providers/article/article";

/**
 * Generated class for the ArticleShowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-article-show',
  templateUrl: 'article-show.html',
})
export class ArticleShowPage {
  articleId: number;
  article: any;
  canRender: boolean = false;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private articleProvider: ArticleProvider) {
  }

  // Here we grab the id that we pushed from the article-index
  // In this application that component is called list instead
  // We store it in articleId variable and push it to the provider
  // so we get the correct article back
  ngOnInit() {
    this.articleId = this.navParams.get("article_id");
    this.articleProvider.show(this.articleId).subscribe(response => {
      this.article = response;
    });
  }
}
