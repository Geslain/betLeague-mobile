import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {PrognosisPage} from "../prognosis/prognosis";
import {PrognosisEventPage} from "../prognosis-event/prognosis-event";

/**
 * Generated class for the TeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {
  private teamList;
  private eventList;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  ngOnInit () {
    this.fetchTeams();
    this.fetchEvents();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamsPage');
  }

  fetchTeams() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.get("https://betleague-api.herokuapp.com/user/5ad855d18323a73338d4e50e/groups").subscribe((teamList) => {
      this.teamList = teamList;
  });
  }

  fetchEvents() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.get("https://betleague-api.herokuapp.com/event").subscribe((eventList) => {
      this.eventList = eventList;
    });
  }

  seeEventPrognosis(id) {
    this.navCtrl.push(PrognosisEventPage, {
      id,
    })
  }
}
