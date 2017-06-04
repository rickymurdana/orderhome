import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs';
import { NavController, NavParams, Tabs } from 'ionic-angular';

@Component({
    templateUrl: 'order.html'
})
export class OrderPage {
	tab:Tabs;
	jumlahgalonaqua=0;
	galonhargaaqua=0;
	jumlahgalonprima=0;
	galonhargaprima=0;
	hargalpgtiga=0;
	jumlahlpgtiga=0;
	hargalpgduabelas=0;
	jumlahlpgduabelas=0;
	constructor(public navCtrl: NavController){
		this.tab = this.navCtrl.parent;
	}

	galonkurangaqua(){
		if (this.jumlahgalonaqua > 0){
		this.jumlahgalonaqua--;
		this.galonhargaaqua = this.galonhargaaqua - 15000;
		}
	}

	galontambahaqua(){
		this.jumlahgalonaqua++;
		this.galonhargaaqua = this.galonhargaaqua + 15000;
	}

	galonkurangprima(){
		if (this.jumlahgalonprima > 0){
		this.jumlahgalonprima--;
		this.galonhargaprima = this.galonhargaprima - 12000;
		}
	}

	galontambahprima(){
		this.jumlahgalonprima++;
		this.galonhargaprima = this.galonhargaprima + 12000;
	}

	lpgkurangtiga(){
		if (this.jumlahlpgtiga > 0){
		this.jumlahlpgtiga--;
		this.hargalpgtiga = this.hargalpgtiga - 20000;
		}
	}

	lpgtambahtiga(){
		this.jumlahlpgtiga++;
		this.hargalpgtiga = this.hargalpgtiga + 20000;
	}

	lpgkurangduabelas(){
		if (this.jumlahlpgduabelas > 0){
		this.jumlahlpgduabelas--;
		this.hargalpgduabelas = this.hargalpgduabelas - 200000;
		}
	}

	lpgtambahduabelas(){
		this.jumlahlpgduabelas++;
		this.hargalpgduabelas = this.hargalpgduabelas + 200000;
	}

	ionViewDidLoad() {
    console.log('ionViewDidLoad AlamatPage');
  }

	pindahAlamat(){
		this.tab.select(2);
	}
 }