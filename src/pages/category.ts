import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductPage } from './product';
import { Category } from '../app/components/category';
import { Product } from '../app/components/product';

@Component({
	templateUrl: 'category.html'
})
export class CategoryPage {

	category: Category;

	constructor(public navCtrl: NavController, private params: NavParams) {
    	this.category = params.get('category');
		console.log('CategoryPage', this.category);
  	}

	formatPrice(amount:number, currency:string) {
		return currency + amount;
	}

	navigate(category:Category, product:Product) {
		this.navCtrl.push(ProductPage, {
			category: category,
			product: product
		});
	}

}
