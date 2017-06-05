import { Component } from '@angular/core';
import { NavController, Tabs } from 'ionic-angular';

@Component({
  selector: 'page-review',
  templateUrl: 'review.html'
})
export class ReviewPage {
  tab:Tabs;
  bintang=0;
  constructor(public navCtrl: NavController) {
  }

  kurangbintang(){
		if(this.bintang > 0 && this.bintang <= 5){
      this.bintang--;
    }
	}

	tambahbintang(){
    if(this.bintang < 5){
		this.bintang++;
	}
  }
}
