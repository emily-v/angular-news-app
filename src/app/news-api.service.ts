import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  api_key = '';

  constructor(private http: HttpClient) { 
    // this.api_key = this.getApiKey();
    // console.log("apikey", this.getApiKey());
  }
  // getApiKey(){
  //   return this.http.get('assets/newsApiKey.txt', {responseType: 'text'})
  //   .subscribe(
  //       data => {return data}
  //   );
  // }
  
  initSources(){
     return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey='+this.api_key);
  }
  initArticles(){
   return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.api_key);
  }
  getArticlesByID(source: String){
   return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key);
  }
}
