/**/
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';

@Component({
    templateUrl: 'app.html'
})
export class TakeoutApp {

	rootPage = HomePage;

	constructor(platform: Platform) {
		platform.ready().then(() => {
			console.log('platform is ready');
			StatusBar.styleDefault();
			Splashscreen.hide();
		});
	}

}
