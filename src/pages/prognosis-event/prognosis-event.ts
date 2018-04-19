import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";
import {TeamsPage} from "../teams/teams";

/**
 * Generated class for the PrognosisEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-prognosis-event',
  templateUrl: 'prognosis-event.html',
})
export class PrognosisEventPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrognosisEventPage');
  }

  back() {
    this.navCtrl.push(TeamsPage)
  }

}
