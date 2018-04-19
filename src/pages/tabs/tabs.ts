import {Component} from '@angular/core';

import {SitAndGoPage} from '../sitAndGo/sitAndGo';
import {HomePage} from '../home/home';
import {TeamsPage} from '../teams/teams';
import {PodiumPage} from "../podium/podium";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SitAndGoPage;
  tab3Root = TeamsPage;
  tab4Root = PodiumPage;

  constructor() {

  }
}
