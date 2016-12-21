import { Component } from '@angular/core';
import { NavController, NavParams, Toast } from 'ionic-angular';
import { Database } from '../../providers/database';
import { Todo } from '../../entities/todo';

@Component({
  selector: 'page-new-todo',
  templateUrl: 'new-todo.html',
  providers: [Database]
})
export class NewTodoPage {

	todo: Todo;

	constructor(public navCtrl: NavController, public navParams: NavParams, private _data: Database) {
		this.todo = new Todo();
  	}

  	save() {
  		var key = this._data.save(this.todo);
  		if (key) {
  			console.log("Todo Saved");
  		}
  	}

	ionViewDidLoad() {
    	console.log('ionViewDidLoad NewTodoPage');
  	}

}
