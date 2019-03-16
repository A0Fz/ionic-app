import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { SharePage } from '../share/share';
import { SlidePage } from '../slide/slide';
import { ContaPage } from '../conta/conta';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = SharePage;
  tab5Root = SlidePage;
  tab6Root = ContaPage;
  
  constructor() {

  }
}
