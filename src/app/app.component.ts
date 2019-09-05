import { Component } from '@angular/core';
import { NewsApiService } from './news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mArticles:Array<any>;
  mSources:Array<any>;

  constructor(private newsApi: NewsApiService){
    console.log('app component constructor called');         
  }

  ngOnInit() {
    //     //load articles
      this.newsApi.initArticles().subscribe(data => this.mArticles = data['articles']);
    // //load news sources
    this.newsApi.initSources().subscribe(data=> this.mSources = data['sources']);  
    console.log("init called");
    }

  searchArticles(source){
    console.log("selected source is: "+source);
    this.newsApi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }
}
