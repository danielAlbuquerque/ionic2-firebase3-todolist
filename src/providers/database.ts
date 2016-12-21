import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {AngularFire, FirebaseListObservable} from 'angularfire2';



@Injectable()
export class Database {

  private _todos$: any;
	private _db: any;
	private _todosRef: any;
  

	constructor() {
    	// this._db = firebase.database().ref('/');
    	// this._todosRef = firebase.database().ref('todos');
    	// this._todosRef.on('child_added', this.handleData, this);
    	// this._todos$ = new ReplaySubject();
  	}

  	get todos() {
  		return this._todos$;
  	}

  	handleData(snap) {
  		// try { 
  		// 	this._todos$.next(snap.val()); 
  		// } catch (error) { 
  		// 	console.log('catching', error); 
  		// }
  	}

  	save(todo) {
  		// return this._todosRef.push(todo).key;
  	}

}
