import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

import {AngularFire, FirebaseListObservable} from 'angularfire2';
import * as firebase from 'firebase';


@Injectable()
export class ArticlesService {
  constructor(private http: Http, private af: AngularFire) {
    console.log('ArticlesService Initialized...');
    //todo uncomment this when will rewrite organization of articles and categories
    // this.articles = this.af.database.list('/articles') as FirebaseListObservable<Article[]>
  }

  articles: FirebaseListObservable<any[]>;

  getArticles(id: number) {
    //todo when replaced with slug use home and make home slug global setting constant for project
    if (!id) {
      id = 1;
    }
    //todo replace query by category instead of id
    return this.af.database.list(`/articles/${id}`);
  }

  getArticle(cid: string, id: string) {
    //todo make urls more consistent. Remove category grouping and list articles by category
    return this.af.database.object(`/articles/${cid}/${id}`);
  }

  deleteArticle(id: any) {
    // return this.articles.remove(id);
    console.log(`call to firebase remove ${id}`);
  }

  updateArticle(id: any, article: any) {
    // return this.articles.remove(id);
    console.log(`call to firebase update ${id}`);
    console.log(`data ${article}`);
  }

  //todo replace any with interface
  addArticle(article: any) {
    // Create root ref
    // todo rewrite this after look at firebase docs
    let storageRef = firebase.storage().ref();
    let cid = article.category;
    for (let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]) {
      let path = `/images/${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {

        //todo rewrite this using returned snapshot or something where i can get url
        storageRef.child(path).getDownloadURL().then((url) => {
          // Set image url
          article.image = selectedFile.name;
          article.path = path;
          //it is in format "https://firebasestorage.googleapis.com/v0/b/village-57ea4.appspot.com/o/images%2Fcd.png?alt=media&token=45bb6416-536d-48ae-b91c-62570dc1823e"
          //i believe that token will expire so need to think something better than this and be prepared to errors here
          article.imageUrl = url;
          const promise = this.af.database.list(`/articles/${cid}`).push(article);
          promise.then(_ => console.log('Success')).catch(err => console.error(err, "Test error"));
          return promise;
        }).catch((error) => {
          console.log(error);
        });

      });

    }
  }
}
