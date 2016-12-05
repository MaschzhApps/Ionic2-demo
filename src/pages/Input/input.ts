import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
	selector: 'input-button',
	templateUrl: 'input.html'
})

export class InputPage{
	constructor(public navCtrl:NavController){
		
	}
	blurInput(){
		console.log("blur");
	}

	focusInput(){
		console.log("focus");
	}
}