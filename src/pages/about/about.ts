import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-about',
	templateUrl: 'about.html'
})
export class AboutPage {

	constructor(public navCtrl: NavController) {
	}
	ionViewDidEnter(){
		// debugger;
		// this.navCtrl.parent.select(0);
	}
}
