import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {CategoriesService} from '../category.service'
import {Category} from './category'

@Component({
    moduleId: module.id,
    selector: 'main-nav',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
    categories: Category[];

    constructor(private router: Router,
                private categoriesService: CategoriesService) {
    }

    ngOnInit() {
        //this is actually observable
        this.categoriesService.getCategories().subscribe(categories => {
            this.categories = categories;
        });
    }

    //loads default category if no id provided in a link
    isCategoryActive(category: Category): boolean {
        if (this.router.url === "/") {
            return category.isDefault;
        } else {
            return this.router.url === "/category/" + category.id;
        }
    }
}
