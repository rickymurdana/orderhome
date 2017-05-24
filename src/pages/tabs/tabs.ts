import { Component } from '@angular/core';

import { DaftarPage } from '../daftar/daftar';
import { OrderPage } from '../order/order';
import { AlamatPage } from '../alamat/alamat';
import { KonfirmasiPage } from '../konfirmasi/konfirmasi';
import { ReviewPage } from '../review/review';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DaftarPage;
  tab2Root = OrderPage;
  tab3Root = AlamatPage;
  tab4Root = KonfirmasiPage;
  tab5Root = ReviewPage;

  constructor() {

  }
}
