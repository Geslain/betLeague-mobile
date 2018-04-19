import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {PrognosisPage} from "../prognosis/prognosis";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private matchDayList: any;
  constructor(public navCtrl: NavController, private http: HttpClient) {

  }

  ngOnInit () {
    this.fetchMatches()
  }

  fetchMatches() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.get("https://betleague-api.herokuapp.com/user/5ad855d18323a73338d4e50e/getAllPrognosisMatches").subscribe((matchDayList) => {
      this.matchDayList = matchDayList;
    });
  }

  seePrognosis(id) {
    this.navCtrl.push(PrognosisPage, {
      id,
    })
  }

  isWinner(firstTeamScore,secondTeamScore,firstPrognosis,secondPrognosis) {
    let result;
    let prognosisResult;

    if(firstTeamScore === secondTeamScore ) result = "tie"
    else if(firstTeamScore < secondTeamScore ) result = "second"
    else result = "first"

    if(firstPrognosis === secondPrognosis ) prognosisResult = "tie"
    else if(firstPrognosis < secondPrognosis ) prognosisResult = "second"
    else prognosisResult = "first"

    return result === prognosisResult
  }
}
