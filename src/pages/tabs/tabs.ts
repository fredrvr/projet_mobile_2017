import { Component } from '@angular/core';

import { AjoutPage } from '../ajout/ajout';
import { PanierPage } from '../panier/panier';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AjoutPage;
  tab3Root = PanierPage;

  constructor() {

  }
}
