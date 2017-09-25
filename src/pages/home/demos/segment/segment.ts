import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';

@IonicPage({
  segment: 'demos/segment'
})
@Component({
  selector: 'page-segment',
  templateUrl: 'segment.html',
})
export class SegmentPage {
  pet:string = 'puppies';
  isAndroid: boolean = false;

  items:any = {
    puppies: [{
      name: 'Ruby',
      icon: 'segment_puppy_1.jpg'
    },{
      name: 'Oscar',
      icon: 'segment_puppy_2.jpg'
    },{
      name: 'Zoey',
      icon: 'segment_puppy_3.jpg'
    },{
      name: 'Otto',
      icon: 'segment_puppy_4.jpg'
    }],
    kittens: [{
      name: 'Luna',
      icon: 'segment_kitten_1.jpg',
    },{
      name: 'Milo',
      icon: 'segment_kitten_2.jpg'
    },{
      name: 'Bandit',
      icon: 'segment_kitten_3.jpg'
    },{
      name: 'Nala',
      icon: 'segment_kitten_4.jpg'
    }],
    ducklings: [{
      name: 'Daffy',
      icon: 'segment_duckling_1.jpg'
    },{
      name: 'Huey',
      icon: 'segment_duckling_2.jpg'
    },{
      name: 'Dewey',
      icon: 'segment_duckling_3.jpg'
    },{
      name: 'Louie',
      icon: 'segment_duckling_4.jpg'
    }]
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private platform: Platform) {
    this.isAndroid = this.platform.is('android');
  }

  ionViewDidLoad() {}

}
