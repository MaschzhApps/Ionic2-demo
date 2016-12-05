import  { Component,ViewChild }    from '@angular/core';
import  { HomePage }     from '../home/home';
import  { AboutPage }    from '../about/about';
import  { ContactPage }  from '../contact/contact';
import  { ButtonPage }  from '../button/button';
import { InputPage } from '../input/input';
import { LoginPage } from '../login/login';
import  { Tabs,ModalController } from 'ionic-angular';

@Component({
	templateUrl: 'tabs.html'
})
export class TabsPage {
	@ViewChild('mainTabs') tabRef:Tabs;
	// this tells the tabs component which Pages
	// should be each tab's root Page
	tab1Root: any = HomePage;
	tab2Root: any = AboutPage;
	tab3Root: any = ContactPage;
	tab4Root:any = ButtonPage;
	tabInput:any = InputPage;
	tabLogin:any = LoginPage;

	homeParams:any = {
		user1:"admin",
		user2:"ionic"
	};
	constructor(public modalCtrl: ModalController) {
	}
	changeTabs = function(){
		console.log("tab changed");
	};
	selectFriend(){
		// let modal = this.modalCtrl.create(ContactPage);
		// modal.present();
	}
	ionViewDidEnter(){
		let mainTabs = this.tabRef;
		mainTabs.select(5);
	}
}
