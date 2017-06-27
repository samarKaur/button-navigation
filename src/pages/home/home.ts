import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AboutPage} from '../about/about';
import {ContactPage} from '../contact/contact';
import { ServicePage } from '../service/service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 aboutPage = AboutPage;
 contactPage = ContactPage;
servicePage = ServicePage;  
  constructor(public navCtrl: NavController) {

  }
  

}
