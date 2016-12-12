import { Component } from '@angular/core';
import { NavController,LoadingController,AlertController,ToastController,ModalController } from 'ionic-angular';
import { HomePage } from '../home/home';
import {RegisterPage} from '../register/register';

@Component({
	selector:'login-page',
	templateUrl:'login.html'
})

export class LoginPage {
	constructor(public NavCtrl:NavController,
		public LoadCtrl:LoadingController,
		private alertCtrl:AlertController,
		private toastCtrl:ToastController,
		private modalCtrl:ModalController){
	}
	userInfo:UserInfo={
		UserName:'liuzhuang',
		PassWord:'111111'
	}

	loadDefault(){
		let loading = this.LoadCtrl.create({
			content:"加载中...",
			dismissOnPageChange:true,
			showBackdrop:true,
			cssClass:'danger'
		});
		loading.present();
		setTimeout(()=>{
			this.NavCtrl.push(HomePage);
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

	presentToast(){
		let toast = this.toastCtrl.create({
			message:'this is a toast',
			duration:3000,
			position:"bottom",
			showCloseButton:true,
			closeButtonText:'x',
			cssClass:'danger',
			dismissOnPageChange:true
		});
		toast.present();
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
				cssClass:'primary',
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
					cssClass:"btn"
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
			//this.presentToast();
			//this.NavCtrl.push(HomePage);
			// this.NavCtrl.parent.select(0);
		}
	}

	goToRegister(){
		this.NavCtrl.push(RegisterPage);
	}
}

export class UserInfo{
	UserName:string;
	PassWord:string;
}