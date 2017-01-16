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
	itemClick(event,item:WareHouse):void{
		alert(item.name);
	}

	wareHouseList:WareHouse[]=[
	new WareHouse(1,'上海仓','徐汇仓库','img/1.jpg'),
	new WareHouse(2,'北京仓','一环仓库','img/2.jpg'),
	new WareHouse(3,'北京二仓','二环仓库','img/3.jpg'),
	new WareHouse(4,'北京三仓','三环仓库','img/4.jpg'),
	new WareHouse(5,'广州仓','小蛮腰','img/5.jpg'),
	new WareHouse(6,'杭州仓','西湖美景','img/6.jpg'),
	new WareHouse(7,'苏州仓','楼外楼','img/7.jpg'),
	new WareHouse(8,'扬州仓','汤包','img/8.jpg'),
	new WareHouse(9,'上海二仓','闵行仓库','img/9.jpeg'),
	new WareHouse(10,'上海三仓','浦东仓库','img/10.jpg')
	];
}

export class WareHouse{
	id:number;
	name:string;
	desc:string;
	img:string;
	constructor(id:number,name:string,desc:string,img:string){
		this.id = id;
		this.name = name;
		this.desc = desc;
		this.img  = img;
	}

}
