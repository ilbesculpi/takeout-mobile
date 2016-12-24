import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Category } from '../app/components/category';
import { Product } from '../app/components/product';

@Component({
	templateUrl: 'product.html'
})
export class ProductPage {

    category: Category;
    product: Product;

    constructor(public navCtrl: NavController, private params: NavParams) {
    	this.category = params.get('category');
        this.product = params.get('product');
		console.log('ProductPage', this.product);
  	}

	formatPrice(amount:number, currency:string) {
		return currency + amount;
	}

}
