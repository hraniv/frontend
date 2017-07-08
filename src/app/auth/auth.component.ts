/**
 *
 * Created by xgalv00 on 13.04.17.
 */

import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2';


@Component({
    moduleId: module.id,
    selector: 'content',
    templateUrl: 'auth.component.html',
    styleUrls: ['auth.component.css'],
})
export class AuthComponent {

    constructor(private af: AngularFire, private router: Router) {
        // this.articlesService.getArticles().subscribe((articles:Article[]) => {
        //     this.articles = articles;
        // });
    }

    loginG() {
        //call basic login function which is configured to use Google provider in app.module.ts
        this.af.auth.login();
        this.router.navigate(['']).catch((err) => {
            console.error(err)
        });
    }

    loginFb() {
        this.af.auth.login({
            provider: AuthProviders.Facebook,
            method: AuthMethods.Redirect,
        });
    }
}
