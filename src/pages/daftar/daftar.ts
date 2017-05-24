import { Component } from '@angular/core';
import { OrderPage } from '../order/order';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'daftar.html'
})
export class DaftarPage {
	constructor(public navCtrl: NavController, public navParams: NavParams) {
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }

	pesan(){
		this.navCtrl.push(OrderPage);
	}
}
