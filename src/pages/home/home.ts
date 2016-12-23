import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FoodCategory } from '../../app/components/category.component';
import { CategoryPage } from '../category/category';

@Component({
	selector: 'home',
	templateUrl: 'home.html'
})
export class HomePage {

	categories: FoodCategory[];

	constructor(public navCtrl: NavController) {

		this.categories = [
			{ id: 1, title: 'Breakfast', image: './assets/images/breakfast.jpg', foods: ['Sandwich'] },
			{ id: 2, title: 'Lunch', image: './assets/images/lunch.jpg', foods: ['Pizza', 'Pasta', 'Hot Dog'] },
			{ id: 3, title: 'Dinner', image: './assets/images/dinner.jpg', foods: ['Salad', 'Arepa'] }
		];
	}

	navigate(category:FoodCategory) {
		this.navCtrl.push(CategoryPage, {
			category: category
		});
	}

}
