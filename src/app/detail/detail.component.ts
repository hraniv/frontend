/**
 * Created by xgalv00 on 29.06.17.
 */
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import * as firebase from 'firebase';

import {ArticlesService} from '../article.service'
import {Article} from "../article"


@Component({
  moduleId: module.id,
  selector: 'content',
  templateUrl: 'detail.component.html',
  styleUrls: ['detail.component.css'],
})

export class DetailComponent implements OnInit {

  article: any;

  constructor(private af: AngularFire, private router: Router, private service: ArticlesService, private route: ActivatedRoute) {
    // this.articlesService.getArticles().subscribe((articles:Article[]) => {
    //     this.articles = articles;
    // });
  }

  ngOnInit() {
    this.route.params
    // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.service.getArticle(params['cid'], params['id']))
      .subscribe((article: FirebaseObjectObservable<Article>) => this.article = article, (err) => console.error(err));
  }

  remove() {
    let redirect_url = `/category/${this.article.category}`;
    this.service.deleteArticle(this.article.$key);
    this.router.navigateByUrl(redirect_url).catch(err => console.error(err));
  }
}

