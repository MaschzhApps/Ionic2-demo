import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

@Component({
	selector: 'page-button',
	templateUrl: 'button.html'
})
export class ButtonPage {
	constructor(public navCtrl: NavController,public navParams:NavParams) {

	}
	isDanger: boolean = true;
	isSecondary: boolean = false;
	isRound: boolean = true;
	isOutline: boolean = false;
	isClear: boolean = true;
	myColor: string = 'secondary';
	myColor2: string = 'dark';
}
