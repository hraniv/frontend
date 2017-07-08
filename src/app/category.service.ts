/**
 * Created by xgalv00 on 16.03.17.
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
//understand how to work with FirebaseListObservable and typescript's checking features
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Injectable()
export class CategoriesService {
    constructor(private http: Http, private af: AngularFire){
        console.log('CategoriesService Initialized...');
    }

    getCategories(){
      return this.af.database.list('/categories');
    }
}

