import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {NativeServiceProvider} from "../../../providers/native-service/native-service";

/**
 * Generated class for the AlertsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: 'demos/alerts'
})
@Component({
  selector: 'page-alerts',
  templateUrl: 'alerts.html',
})
export class AlertsPage {

  testRadioOpen: boolean;
  testRadioResult: any;

  testCheckboxOpen: boolean;
  testCheckboxResult: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public nativeService: NativeServiceProvider) {}

  ionViewDidLoad() {}

  showBasicAlert() {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }

  showPromptAlert() {
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: 'Enter a name for this new album you\'re so keen on adding',
      inputs: [{
        name: 'title',
        placeholder: 'Title'
      }],
      buttons: [{
        text: 'Cancel',
        handler: () => {
          this.nativeService.showToast('Cancel clicked');
        }
      },{
        text: 'Save',
        handler: data => {
          this.nativeService.showToast(`You typed ${data.title}`);
        }
      }]
    });
    prompt.present();
  }

  showConfirmAlert() {
    let confirm = this.alertCtrl.create({
      title: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [{
        text: 'Disagree',
        handler: () => {
          this.nativeService.showToast('Disagree clicked');
        }
      },{
        text: 'Agree',
        handler: () => {
          this.nativeService.showToast('Agree clicked');
        }
      }]
    });
    confirm.present();
  }

  showRadioAlert() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Lightsaber color');
    alert.addInput({
      type: 'radio',
      label: 'Blue',
      value: 'blue',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Green',
      value: 'green'
    });

    alert.addInput({
      type: 'radio',
      label: 'Red',
      value: 'red'
    });

    alert.addInput({
      type: 'radio',
      label: 'Yellow',
      value: 'yellow'
    });

    alert.addInput({
      type: 'radio',
      label: 'Purple',
      value: 'purple'
    });

    alert.addInput({
      type: 'radio',
      label: 'White',
      value: 'white'
    });

    alert.addInput({
      type: 'radio',
      label: 'Black',
      value: 'black'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.nativeService.showToast('Radio data: ' + data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });
    alert.present().then(() => {
      this.testRadioOpen = true;
    });
  }

  showCheckboxAlert() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Which planets have you visited?');

    alert.addInput({
      type: 'checkbox',
      label: 'Alderaan',
      value: 'Alderaan',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Bespin',
      value: 'Bespin'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Coruscant',
      value: 'Coruscant'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Endor',
      value: 'Endor'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Hoth',
      value: 'Hoth'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Jakku',
      value: 'Jakku'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Naboo',
      value: 'Naboo'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Takodana',
      value: 'Takodana'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Tatooine',
      value: 'Tatooine'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okey',
      handler: data => {
        this.nativeService.showToast('Checkbox data: ' + data);
        this.testCheckboxOpen = false;
        this.testCheckboxResult = data;
      }
    });
    alert.present().then(() => {
      this.testCheckboxOpen = true;
    });

  }
}
