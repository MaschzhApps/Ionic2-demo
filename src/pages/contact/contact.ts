import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-contact',
	templateUrl: 'contact.html',
	styles:[`ion-card {
	position: relative;
	text-align: center;
}

.card-title {
	position: absolute;
	top: 36%;
	font-size: 2.0em;
	width: 100%;
	font-weight: bold;
	color: #fff;
}

.card-subtitle {
	font-size: 1.0em;
	position: absolute;
	top: 52%;
	width: 100%;
	color: #fff;
}`]
})
export class ContactPage {

	constructor(public navCtrl: NavController) {

	}

}
