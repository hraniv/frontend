/**
 * Created by xgalv00 on 14.03.17.
 */
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { CategoryComponent } from './category/category.component';
import { AddComponent } from './add/add.component';
import { AuthComponent } from './auth/auth.component';
import { EditComponent } from './edit/edit.component';
import { DetailComponent } from './detail/detail.component';

// add named routing from solution https://stackoverflow.com/questions/37999286/angular2-named-routes
export class Url {
    // todo understand how move dict with urls to this.dict[routingName]
    public static to(routingName: string, values?: any) {
        return {
          'edit-article': '/articles/:id/edit',
          'add-article': '/articles/add',
        }[routingName];
    }

}

const APPROUTES: Routes = [
    {
        path:'',
        component: ContentComponent
    },
    {
        path:'category/:id',
        component: ContentComponent
    },
    {
        path:'login',
        component: AuthComponent
    },
    {
        path: 'articles/add',
        component: AddComponent
    },
    {
        path: 'articles/:cid/:id/edit',
        component: EditComponent
    },
    {
        path: 'articles/:cid/:id',
        component: DetailComponent
    }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(APPROUTES);
