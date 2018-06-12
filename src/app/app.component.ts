import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen, GoogleAnalytics } from 'ionic-native';
import { QuotesListPage } from '../pages/quotes-list/quotes-list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = QuotesListPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      GoogleAnalytics.debugMode();
          GoogleAnalytics.startTrackerWithId("<GA tracking id>");
    GoogleAnalytics.enableUncaughtExceptionReporting(true).then((_success) => {
  	  console.log("Successful enabling of uncaught exception reporting "+_success)
    }).catch((_error) => {
  	  console.log("error occured "+_error)
    });

    });

  }
}
