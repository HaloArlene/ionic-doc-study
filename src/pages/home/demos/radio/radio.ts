import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormControl, FormGroup} from "@angular/forms";
import {NativeServiceProvider} from "../../../../providers/native-service/native-service";

@IonicPage({
  segment: 'demos/radio'
})
@Component({
  selector: 'page-radio',
  templateUrl: 'radio.html',
})
export class RadioPage {
  langs:any;
  langForm:any;

  languages:Array<{name:string, value:string}> = [
    {
      name: 'Go',
      value: 'golang'
    },{
      name: 'Rust',
      value: 'rust'
    },{
      name: 'Python',
      value: 'python'
    },{
      name: 'Ruby',
      value: 'ruby'
    },{
      name: 'Clojure',
      value: 'clojure'
    },{
      name: 'Java',
      value: 'java'
    },{
      name: 'PHP',
      value: 'php'
    },{
      name: '.NET',
      value: 'dotnet'
    },{
      name: 'C++',
      value: 'cplusplus'
    },{
      name: 'Scala',
      value: 'scala'
    },{
      name: 'Haskell',
      value: 'haskell'
    },{
      name: 'Erlang',
      value: 'erlang'
    }
  ];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public nativeService: NativeServiceProvider) {
    this.langForm = new FormGroup({
      "langs": new FormControl({disabled: false})
    });
  }

  ionViewDidLoad() {}

  doSubmit(event) {
    this.nativeService.showToast('Submitting form: ' + this.langForm.value.langs);
    event.preventDefault();
  }

}
