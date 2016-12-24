import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Category } from '../app/components/category';
import { CategoryPage } from './category';

@Component({
	selector: 'home',
	templateUrl: 'home.html'
})
export class HomePage {

	categories: Category[];

	constructor(public navCtrl: NavController) {

		this.categories = [
			{
				id: 1,
				title: 'Breakfast',
				image: './assets/images/breakfast.jpg',
				products: [
					{ id: 1, title: 'Sandwich', image: 'sandwich.jpg', likes: 31, price: 6.00 }
				]
			},
			{
				id: 2,
				title: 'Lunch',
				image: './assets/images/lunch.jpg',
				products: [
					{ id: 2, title: 'Pizza', image: 'pizza.jpg', likes: 85, price: 8.99 },
					{ id: 3, title: 'Pasta', image: 'pasta.jpg', likes: 19, price: 10.50 },
					{ id: 4, title: 'Cheese Burger', image: 'cheese_burger.jpg', likes: 54, price: 6.50 }
				]
			},
			{
				id: 3,
				title: 'Dinner',
				image: './assets/images/dinner.jpg',
				products: [
					{ id: 2, title: 'Salad', image: 'salad.jpg', likes: 12, price: 8.99 }
				]
			},
		];
	}

	navigate(category:Category) {
		this.navCtrl.push(CategoryPage, {
			category: category
		});
	}

}
