/**
 * Created by xgalv00 on 29.06.17.
 */
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {AngularFire, AuthProviders, AuthMethods, FirebaseObjectObservable} from 'angularfire2';

import {ArticlesService} from '../article.service'
import {Article} from "../article"


@Component({
    moduleId: module.id,
    selector: 'content',
    templateUrl: 'edit.component.html',
    styleUrls: ['edit.component.css'],
})

export class EditComponent implements OnInit {

    //used to use this but it is not compile due to Typescript errors
    //need to understand typescript better for this to resolve
    // article: FirebaseObjectObservable<Article>;
    article: any;

    constructor(private af: AngularFire, private router: Router, private service: ArticlesService, private route: ActivatedRoute) {
        // this.articlesService.getArticles().subscribe((articles:Article[]) => {
        //     this.articles = articles;
        // });
    }

    editArticle() {
        //  understand how to change image
        let article = {
            title: this.article.title,
            content: this.article.content,
            category: this.article.category,
        };
        //dummy method
        this.service.updateArticle(this.article.$key, article);
        this.router.navigate([`category/${this.article.category}`]).catch(err => {
            console.error(err, 'Navigate error')
        });
    }

    ngOnInit() {
        this.route.params
        // (+) converts string 'id' to a number
            .switchMap((params: Params) => this.service.getArticle(params['cid'], params['id']))
            .subscribe((article: Article) => this.article = article);
    }
}
