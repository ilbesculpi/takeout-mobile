import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { TakeoutApp } from './app.component';
import { HomePage } from '../pages/home';
import { CategoryPage } from '../pages/category';


@NgModule({
    declarations: [
        TakeoutApp,
        HomePage,
        CategoryPage
    ],
    imports: [
        IonicModule.forRoot(TakeoutApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        TakeoutApp,
        HomePage,
        CategoryPage
    ],
    providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
