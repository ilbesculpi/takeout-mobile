/**/
import { Component,ViewChild } from '@angular/core';
import { Platform, MenuController, Nav  } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HomePage } from '../pages/home/home';

@Component({
    templateUrl: 'app.html'
})
export class TakeoutApp {
 @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Home', component: HomePage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {

    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
}

}
