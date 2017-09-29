import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpServiceProvider} from "../../../../providers/http-service/http-service";
import {NativeServiceProvider} from "../../../../providers/native-service/native-service";
//import {Movie} from "./movie";

@IonicPage({
  segment: 'movies/movie-detail'
})
@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html',
})
export class MovieDetailPage {

  apiUrl: string = '';
  id: string;
  movie: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private httpService: HttpServiceProvider,
              private nativeService: NativeServiceProvider) {

  }

  ionViewDidLoad() {
    this.id = this.navParams.get('id') || '1291546';
    this.apiUrl = `https://api.douban.com/v2/movie/subject/${this.id}`;
    if(this.id){
      this.httpService.post(this.apiUrl, {}, data => {
        this.movie = data;
        console.log(this.movie);
      });
    }
  }

}
