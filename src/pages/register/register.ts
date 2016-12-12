import {Component} from '@angular/core';
import {NavController,ViewController} from 'ionic-angular';
@Component(
{
	selector:"register-page",
	templateUrl:"register.html"
})

export class RegisterPage{
	constructor(private NavCtrl:NavController,private ViewCtrl:ViewController){

	}
	goBack(){
		this.ViewCtrl.dismiss();
	}
}