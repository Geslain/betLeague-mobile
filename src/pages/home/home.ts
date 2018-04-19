import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {PrognosisPage} from "../prognosis/prognosis";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private prognosisList: any;
  constructor(public navCtrl: NavController, private http: HttpClient) {

  }

  ngOnInit () {
    this.fetchMatches()
  }

  fetchMatches() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.get("https://betleague-api.herokuapp.com/user/5ad855d18323a73338d4e50e/getDeepPrognosis").subscribe((prognosisList) => {
      this.prognosisList = prognosisList;
    });
  }

  seePrognosis(id) {
    this.navCtrl.push(PrognosisPage, {
      id,
    })
  }
}
