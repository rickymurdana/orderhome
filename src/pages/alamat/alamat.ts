import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs';
import { NavController, Tabs } from 'ionic-angular';

@Component({
  selector: 'page-alamat',
  templateUrl: 'alamat.html'
})
export class AlamatPage {
  tab: Tabs;
  constructor(public navCtrl: NavController) {
  	this.navCtrl.parent()
  }
  

}
