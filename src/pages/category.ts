import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Category } from '../app/components/category';

@Component({
	templateUrl: 'category.html'
})
export class CategoryPage {

	category: Category;

	constructor(public navCtrl: NavController, private params: NavParams) {
    	this.category = params.get('category');
		console.log(this.category);
  	}

	formatPrice(amount:number, currency:string) {
		return currency + amount;
	}

}
