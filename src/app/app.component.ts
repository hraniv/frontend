import {Component} from '@angular/core';
import {AngularFire} from "angularfire2";

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private af: AngularFire) {
    }

    logout() {
        //add flash message here
        this.af.auth.logout().catch(err => console.error(err));
    }
}

