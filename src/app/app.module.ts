import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { QuotesListPage } from '../pages/quotes-list/quotes-list';
import { QuotesDetailPage } from '../pages/quotes-detail/quotes-detail';


@NgModule({
  declarations: [
    MyApp,
    QuotesListPage,
    QuotesDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    QuotesListPage,
    QuotesDetailPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
