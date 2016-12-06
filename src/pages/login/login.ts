import { Component } from '@angular/core';
import { NavController,LoadingController,AlertController } from 'ionic-angular';
import { AlertPage } from '../alert/alert';

@Component({
	selector:'login-page',
	templateUrl:'login.html'
})

export class LoginPage {
	constructor(public NavCtrl:NavController,
		public LoadCtrl:LoadingController,
		private alertCtrl:AlertController){
	}
	userInfo:UserInfo={
		UserName:'liuzhuang',
		PassWord:'111111'
	}

	loadDefault(){
		let loading = this.LoadCtrl.create({
			content:"loading...",
			dismissOnPageChange:true,
			showBackdrop:true,
			cssClass:'danger'
		});
		loading.present();
		setTimeout(()=>{
			this.NavCtrl.push(AlertPage);
		},1000);
		setTimeout(()=>{
			loading.dismiss();
		},3000);
	}

	loadCustom(){
		let loading = this.LoadCtrl.create({
			spinner:"dots",
			// content:`<div class="custom-spinner-container">
			// <div class="custom-spinner-box"></div>
			// </div>`,
			duration:5000
		});
		loading.onDidDismiss(()=>{
			console.log("Dismissed loading");
		});
		loading.present();
	}

	loadText(){
		let loading = this.LoadCtrl.create({
			spinner:"hide",
			content:"loading",
			duration:3000
		});
		loading.present();

	}

	btnClick(){
		// this.loadDefault();
		// this.loadText();
		// this.loadCustom();
		if(this.userInfo.UserName == "" ){
			let alertUserNameError = this.alertCtrl.create({
				title:"Login Info",
				subTitle:"please enter a valid UserName",
				message:'UserName can not be empty...',
				buttons:["OK"],
				cssClass:'danger',
				inputs:["text","password"],
				enableBackdropDismiss:false
			});
			alertUserNameError.present();
		} else if(this.userInfo.PassWord == ""){
			let alertPwdError = this.alertCtrl.create({
				title:'Login Info',
				subTitle:'please enter a valid Password',
				message:'password can not be empty...',
				buttons:[{
					text:'I see',
					handler:()=>{
						console.log('tap i see!');
						return false;
					},
					cssClass:"color:danger"
				},{
					text:'Cancel',
					handler:()=>{
						console.log('tap cancel!');
					},
					cssClass:'danger',
					role:'null'
				}],
				inputs:[{
					type:'checkbox'
				},{
					type:'checkbox'
				}]
			});
			alertPwdError.present();
		} 
		else {
			this.loadDefault();
		}
	}
}

export class UserInfo{
	UserName:string;
	PassWord:string;
}