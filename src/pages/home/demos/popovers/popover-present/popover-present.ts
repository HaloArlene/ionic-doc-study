import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  segment: 'demos/popovers/popover-present'
})
@Component({
  selector: 'page-popover-present',
  templateUrl: 'popover-present.html',
})
export class PopoverPresentPage{
  background:string;
  contentEle:any;
  textEle:any;
  fontFamily;

  colorArr:Array<string> = ['white', 'tan', 'grey', 'black'];
  colors = {
    'white': {
      'bg': 'rgb(255, 255, 255)',
      'fg': 'rgb(0, 0, 0)'
    },
    'tan': {
      'bg': 'rgb(249, 241, 228)',
      'fg': 'rgb(0, 0, 0)'
    },
    'grey': {
      'bg': 'rgb(76, 75, 80)',
      'fg': 'rgb(255, 255, 255)'
    },
    'black': {
      'bg': 'rgb(0, 0, 0)',
      'fg': 'rgb(255, 255, 255)'
    },
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    if(this.navParams.data){
      this.contentEle = this.navParams.data.contentEle;
      this.textEle = this.navParams.data.textEle;

      this.background = this.getColorName(this.contentEle.style.backgroundColor);
      this.setFontFamily();
    }
  }

  getColorName(bg: string) {
    let colorName = 'white';
    if(!bg) return colorName;

    for(let key in this.colors){
      if(this.colors[key].bg == bg){
        colorName = key;
      }
    }
    return colorName;
  }

  setFontFamily() {
    if(this.textEle.style.fontFamily){
      this.fontFamily = this.textEle.style.fontFamily.replace(/'/g, "");
    }
  }

  changeBackground(color:string) {
    this.background = color;
    this.contentEle.style.backgroundColor = this.colors[color].bg;
    this.textEle.style.color = this.colors[color].fg;
  }

  changeFontSize(direction:string) {
    this.textEle.style.fontSize = direction;
  }

  changeFontFamily() {
    if(this.fontFamily) this.textEle.style.fontFamily = this.fontFamily;
  }

}
