import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NativeServiceProvider} from "../../../providers/native-service/native-service";

@IonicPage({
  segment: 'demos/lists'
})
@Component({
  selector: 'page-lists',
  templateUrl: 'lists.html',
})
export class ListsPage {

  items:Array<string> = [
    'Pokémon Yellow',
    'Super Metroid',
    'Mega Man X',
    'The Legend of Zelda',
    'Pac-Man',
    'Super Mario World',
    'Street Fighter II',
    'Half Life',
    'Final Fantasy VII',
    'Star Fox',
    'Tetris',
    'Donkey Kong III',
    'GoldenEye 007',
    'Doom',
    'Fallout',
    'GTA',
    'Halo'
  ];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public nativeService: NativeServiceProvider) {
  }

  ionViewDidLoad() {}

  itemChosen(item:string) {
    this.nativeService.showToast(`Selected Item: ${item}`);
  }

}
