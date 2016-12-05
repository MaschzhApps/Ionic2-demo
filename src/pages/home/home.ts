import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	constructor(public navCtrl: NavController,public navParams:NavParams) {
	}
	ionViewWillEnter(){
		console.log("NavParams:"+this.navParams.data.user1);
		console.log("NavParams:"+this.navParams.data.user2);
	}
}
