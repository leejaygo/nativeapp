import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import {  }

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  	lists: Array<Object> = [{
  		title: '11',
  	},
  	{
  		title: '22'
  	},
  	{
  		title: '33'
  	}]

  	ifShowItems: boolean = true

	constructor(public navCtrl: NavController) {

	}

	onInput (e){
	  	console.log(e.data)
	}

	itemClick(e){
		console.log(e.target.innerHTML)
	}

	
}
