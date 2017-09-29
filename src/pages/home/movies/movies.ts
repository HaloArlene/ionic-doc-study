import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpServiceProvider} from "../../../providers/http-service/http-service";
import {NativeServiceProvider} from "../../../providers/native-service/native-service";

@IonicPage({
  segment: 'movies'
})
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
  providers: [ HttpServiceProvider ]
})
export class MoviesPage {
  pageNum: number = 1;
  private reqUrl: string = 'https://api.douban.com/v2/movie/top250';

  movies: Array<any> = [];
  refresher: any;
  pageSize: number = 10;
  total: number = 250;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private httpService: HttpServiceProvider,
              private nativeService: NativeServiceProvider) {
  }

  ionViewDidLoad() {
    this.loadMovies();
  }

  loadMovies(refresher?:any) {
    this.httpService.post(this.reqUrl, {
      start: (this.pageNum - 1) * this.pageSize,
      count: this.pageSize
    }, data => {
      if(data.subjects){
        refresher ? refresher.complete() : '';
        this.movies = this.movies.concat(data.subjects);
        this.total = data.subjects.total;
      }
    }, () => {
      refresher ? refresher.cancel() : '';
    });
  }

  loadMore(event) {
    this.refresher = event;
    this.pageNum++;
    if(this.total / this.pageSize <= this.pageNum){
      this.refresher.enable(false);
      this.nativeService.showToast('No More Data.');
      return;
    }else {
      this.loadMovies();
      setTimeout(() => {
        this.refresher.enable(true);
        this.refresher.complete();
      }, 1000);
    }
  }

  showDetail(id: string) {
    this.navCtrl.push('MovieDetailPage', {id: id});
  }

}
