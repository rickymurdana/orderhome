import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs';
import { NavController, Tabs } from 'ionic-angular';


@Component({
  templateUrl: 'daftar.html'
})
export class DaftarPage {
	tab: Tabs;
	constructor(public navCtrl: NavController) {
		this.tab = this.navCtrl.parent;
  }

  pesan(){
  	this.tab.select(1);
  }
}
