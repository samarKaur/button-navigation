import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ServicePage } from '../service/service';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  
  tab2Root = AboutPage;
  tab1Root = HomePage;
  tab3Root = ContactPage;
  tab4Root = ServicePage;

  constructor() {

  }
}
