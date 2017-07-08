import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';
import {ROUTING} from './app.routing';

import {AppComponent} from './app.component';
import {ContentComponent} from './content/content.component';
import {CategoryComponent} from './category/category.component';
import {AddComponent} from './add/add.component';
import {AuthComponent} from './auth/auth.component';
import {EditComponent} from './edit/edit.component';
import {DetailComponent} from './detail/detail.component';

import {ArticlesService} from './article.service'
import {CategoriesService} from './category.service'

// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyDLqqUCwq-5ghrZJ4xpLExdE7TfxOmCsXM",
    authDomain: "village-57ea4.firebaseapp.com",
    databaseURL: "https://village-57ea4.firebaseio.com",
    // projectId: "village-57ea4",
    storageBucket: "village-57ea4.appspot.com",
    messagingSenderId: "708193878590"
};
//docs are here https://github.com/angular/angularfire2/blob/master/docs/5-user-authentication.md
const myFirebaseAuthConfig = {
    provider: AuthProviders.Google,
    method: AuthMethods.Redirect
};


@NgModule({
    declarations: [
        AppComponent,
        ContentComponent,
        CategoryComponent,
        AddComponent,
        AuthComponent,
        EditComponent,
        DetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ROUTING,
        AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
    ],
    providers: [ArticlesService, CategoriesService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
