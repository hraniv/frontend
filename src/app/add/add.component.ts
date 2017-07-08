/**
 * Created by xgalv00 on 29.06.17.
 */
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2';

import {ArticlesService} from '../article.service'
import {Article} from "../article"


@Component({
    moduleId: module.id,
    selector: 'content',
    templateUrl: 'add.component.html',
    styleUrls: ['add.component.css'],
})
export class AddComponent {
    title: any;
    content: any;
    category: any;
    image: any;

    constructor(private af: AngularFire, private router: Router, private articleServise: ArticlesService) {
        // this.articlesService.getArticles().subscribe((articles:Article[]) => {
        //     this.articles = articles;
        // });
    }

    addArticle() {
        let article = {
            title: this.title,
            content: this.content,
            category: this.category,
        };
        this.articleServise.addArticle(article);
        this.router.navigate([`category/${this.category}`]).catch(err => {
            console.error(err, 'Navigate error')
        });
    }
}

