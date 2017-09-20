import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@IonicPage({
  segment: 'demos/inputs'
})
@Component({
  selector: 'page-inputs',
  templateUrl: 'inputs.html',
})
export class InputsPage {
  form: FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController) {
    this.form = new FormGroup({
      firstName: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required)
    });
  }

  ionViewDidLoad() {
  }

  processForm() {
    let alert = this.alertCtrl.create({
      title: 'Account Created',
      message: 'Created Account for: ' + this.form.value.firstName + ' ' + this.form.value.lastName,
      buttons: [{
        text: 'OK'
      }]
    });
    if(this.form.status === 'VALID'){
      alert.present();
    }
  }

}
