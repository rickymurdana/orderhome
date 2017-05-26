import { Component } from '@angular/core';
import { ReviewPage } from '../review/review';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-konfirmasi',
  templateUrl: 'konfirmasi.html'
})
export class KonfirmasiPage {

  constructor(public navCtrl: NavController) {

  }

  public event = {
  	month: '2017-05-26'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewPage');
  }

  pindahReview(){
	this.navCtrl.push(ReviewPage);
  }

}
