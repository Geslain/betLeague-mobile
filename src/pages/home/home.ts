import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";

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

    this.http.get("http://localhost:1337/user/1/getDeepPrognosis").subscribe((prognosisList) => {
      this.prognosisList = prognosisList;
      console.log(this.prognosisList)
    });
  }
}
