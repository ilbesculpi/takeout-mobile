import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Category } from '../../models/category';
import { Product } from '../../models/product';
import {ProductPage} from '../products/products'

@Component({
	templateUrl: 'categories.html'
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

		navigate(category:Category, product:Product) {
		//el set push lo coloca como por arriba
			this.navCtrl.push(ProductPage, {
				category: category,
				product: product
			});
		}

}
