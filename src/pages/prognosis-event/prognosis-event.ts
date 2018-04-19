import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {HomePage} from "../home/home";
import {TeamsPage} from "../teams/teams";
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormGroup, FormArray} from '@angular/forms';

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

  private matches;
  private form: FormGroup;


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public formBuilder: FormBuilder) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrognosisEventPage');
  }

  ngOnInit() {
    this.fetchMatches()
    // this.form = this.formBuilder.group({
    //   'matches': this.formBuilder.array([
    //     this.formBuilder.group({
    //       firstTeamScore: 0,
    //       secondTeamScore: 0
    //     })
    //   ])
    // })
  }

  back() {
    this.navCtrl.push(TeamsPage)
  }

  submit() {

  }

  fetchMatches() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.get("https://betleague-api.herokuapp.com/event/5ad86196fef554014cd2d4d0/getAllMatches").subscribe((matches) => {
      this.matches = matches;
    });
  }

  increment(team, id) {
    let match = this.matches.find((match) => match.id === id)
    if (team == "first") match.firstTeamScore = match.firstTeamScore + 1
    else match.secondTeamScore = match.secondTeamScore + 1

    console.log(this.matches)
  }

  decrement(team, id) {
    let match = this.matches.find((match) => match.id === id)
    if (team == "first") match.firstTeamScore = match.firstTeamScore - 1
    else match.secondTeamScore = match.secondTeamScore - 1
  }
}
