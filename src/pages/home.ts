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
					{
						id: 1,
						title: 'Sandwich',
						image: 'sandwich.jpg',
						likes: 31,
						price: 6.00,
						description: ''
					}
				]
			},
			{
				id: 2,
				title: 'Lunch',
				image: './assets/images/lunch.jpg',
				products: [
					{
						id: 2,
						title: 'Pizza',
						image: 'pizza.jpg',
						likes: 85,
						price: 8.99,
						description: ''
					},
					{
						id: 3,
						title: 'Pasta',
						image: 'pasta.jpg',
						likes: 19,
						price: 10.50,
						description: ''
					},
					{
						id: 4,
						title: 'PRIMER CHEESEBURGER',
						image: 'cheese_burger.jpg',
						likes: 54,
						price: 16.50,
						description: 'Try our juicy Cheeseburger topped with 4oz of shaved Prime Rib,\
							melted Swiss and Colby Jack Cheese, Mayonnaise, creamy Horseradish Sauce, and sautéed Onions.\
							Served with Onion Rings.'
					},
					{
						id: 5,
						title: 'BBQ BACON CHEESEBURGER',
						image: 'cheese_burger.jpg',
						likes: 54,
						price: 15.00,
						description: 'A big Juicy Cheeseburger drenched in BBQ Sauce,\
							topped with three pieces of Bacon,\
							and crowned with one of our World Famous Onion Rings'
					}
				]
			},
			{
				id: 3,
				title: 'Dinner',
				image: './assets/images/dinner.jpg',
				products: [
					{
						id: 6,
						title: 'CAESAR SALAD WITH POLYNESIAN COCONUT SHRIMP',
						image: 'salad.jpg',
						likes: 12,
						price: 8.99,
						description: 'Crisp Romaine Lettuce tossed with Croûtons, Parmesan Cheese, and a Classic Caesar Dressing,\
							topped off with our Polynesian Coconut Shrimp. (Sub Grilled Chicken) '
					}
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
