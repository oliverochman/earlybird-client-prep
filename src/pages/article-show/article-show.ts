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
  ngOnInit() {
    this.articleId = this.navParams.get("article_id");
    this.articleProvider.show(this.articleId).subscribe(response => {
      this.article = response;
      this.renderMe();
    });
  }

  renderMe() {
    this.canRender = true;
  }
}
