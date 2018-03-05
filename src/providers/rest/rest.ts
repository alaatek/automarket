import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
	apiUrl = 'http://automark.ae:3000/api';
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getCategories() {
  	console.log("4");
  return new Promise(resolve => {
    this.http.get(this.apiUrl+'/categories').subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
}

 getcat_items(id){
  return new Promise(resolve => {
    this.http.get(this.apiUrl+'/categories/'+id+'/cars').subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
}

getcitiesRest(){
  return new Promise(resolve => {
    this.http.get(this.apiUrl+'/cities').subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
}
/*public get_Category_items(cat_id) {
  return new Promise(resolve => {
    this.http.get(this.apiUrl+'/categories/'+cat_id+'/cars').subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
}*/





}
