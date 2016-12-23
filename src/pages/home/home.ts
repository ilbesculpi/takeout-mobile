import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FoodCategory } from '../../app/components/category.component';

@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomePage {

	categories: FoodCategory[];

  constructor(public navCtrl: NavController) {

  	this.categories = [
		{ id: 1, title: 'Breakfast', image: './assets/images/breakfast.jpg' },
		{ id: 2, title: 'Lunch', image: './assets/images/lunch.jpg' },
		{ id: 3, title: 'Dinner', image: './assets/images/dinner.jpg' }
	];
  }

}
