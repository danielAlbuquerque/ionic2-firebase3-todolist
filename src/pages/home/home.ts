import { Component } from '@angular/core';
import { Database } from '../../providers/database';
import { NavController, AlertController } from 'ionic-angular';
import { NewTodoPage } from '../new-todo/new-todo';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Database]
})
export class HomePage {
	public songs: any;

	constructor(public navCtrl: NavController, private _data: Database, af: AngularFire, public alertCtrl: AlertController) {
	  this.songs = af.database.list('/songs');
	}

	addSong() {
		let prompt = this.alertCtrl.create({
    title: 'Song Name',
    message: "Enter a name for this new song you're so keen on adding",
    inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.songs.push({
              title: data.title
            });
          }
        }
      ]
    });
    prompt.present();
	}

}
