import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FoodCategory } from '../app/components/category';

@Component({
	templateUrl: 'category.html'
})
export class CategoryPage {

	category: FoodCategory;

	constructor(public navCtrl: NavController, private params: NavParams) {
    	this.category = params.get('category');
		console.log(this.category);
  	}

}
