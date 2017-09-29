import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'
import {NativeServiceProvider} from "../native-service/native-service";

@Injectable()
export class HttpServiceProvider {

  constructor(private http: Http,
              private nativeService: NativeServiceProvider) {}

  post(api: string,
       data: any,
       success?:(successCallBack) => void,
       errorback?:(json?:any) => void,
       needLoading:boolean = true) {
    let newData: string = '';
    for(let k in data){
      newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&';
    }
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'});
    let options = new RequestOptions({headers: headers});
    needLoading ? this.nativeService.showLoading() : '';
    return this.http.post(api, newData, options).toPromise().then(response => {
      let json = response.json();
        needLoading ? this.nativeService.hideLoading() : '';
        success(json);
    }).catch(err => {
      needLoading ? this.nativeService.hideLoading('Network Error')
        : this.nativeService.showToast('Network Error.');
      if(errorback) errorback(err);
      return Promise.reject(err);
    });
  }

}
