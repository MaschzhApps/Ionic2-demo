import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector:'alert-page',
	templateUrl:"alert.html"
})

export class AlertPage{
	constructor(public NavCtrl:NavController){
	}
}