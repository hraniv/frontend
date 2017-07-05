import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {ArticlesService} from '../article.service'
import {Category} from "../category/category";
import {Article} from "../article"
import {Url} from "../app.routing"


@Component({
  moduleId: module.id,
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [ArticlesService]
})
export class ContentComponent implements OnInit{
    articles: Article[];
    category: Category;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: ArticlesService
    ) {
        // this.articlesService.getArticles().subscribe((articles:Article[]) => {
        //     this.articles = articles;
        // });
    }

    ngOnInit() {
      this.route.params
        // (+) converts string 'id' to a number
        .switchMap((params: Params) => this.service.getArticles(+params['id']))
        .subscribe((articles:Article[]) => this.articles=articles);
    }
}


