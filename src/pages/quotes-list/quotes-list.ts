import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {QuotesDetailPage} from '../quotes-detail/quotes-detail';
import { GoogleAnalytics } from 'ionic-native';
import { Platform } from 'ionic-angular';
/*
  Generated class for the QuotesList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-quotes-list',
  templateUrl: 'quotes-list.html'
})
export class QuotesListPage {

quotesList = [];
filteredQuotes = [];
isfiltered: boolean ;

  constructor(private http:Http, private navController: NavController,platform: Platform) {
    this.isfiltered = false;
    this.http.get('quotes.json')
    .map(res => res.json())
    .subscribe(
        data => {
          this.quotesList = data.quotes;
        },
        err => console.log("error is "+err), // error
        () => console.log('read quotes Complete '+ this.quotesList) // complete
    );
    platform.ready().then(() => {
    GoogleAnalytics.trackView("Quotes List");
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotesListPage');
  }

  searchQuotes(event) {
		if(event.target.value.length > 2) {
      var filteredJson = this.quotesList.filter(function (row) {
        if(row.author.indexOf(event.target.value) != -1) {
          return true
        } else {
          return false;
        }
    });
    this.isfiltered = true;
    this.filteredQuotes = filteredJson;
		}
	}

itemTapped(event, quote) {
		console.log(quote);
		this.navController.push(QuotesDetailPage, {
			quote: quote
		});
	}

}
