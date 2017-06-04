import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs';
import { NavController, Tabs } from 'ionic-angular';

@Component({
  selector: 'page-konfirmasi',
  templateUrl: 'konfirmasi.html'
})
export class KonfirmasiPage {
  tab: Tabs;
  constructor(public navCtrl: NavController) {
  	this.tab = this.navCtrl.parent;
  }

  public event = {
  	month: '2017-05-26'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewPage');
  }

  pindahReview(){
	this.tab.select(4);
  }

}
