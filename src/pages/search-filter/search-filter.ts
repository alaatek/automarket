import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
/**
 * Generated class for the SearchFilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-search-filter',
  templateUrl: 'search-filter.html',
})
export class SearchFilterPage { 
	cities:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public restProvider: RestProvider, private loadingCtrl: LoadingController) {
  	console.log(this.cities);
    this.getcities();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchFilterPage');
   
    
       }
    
  getcities(){
           
  	// Create the popup
    let loadingPopup = this.loadingCtrl.create({
      content: 'Loading data...'
    }); 
    // Show the popup
    loadingPopup.present();
    this.restProvider.getcitiesRest()
    .then(data2 => {
      this.cities = (<any>data2).data;
      console.log(this.cities);
      loadingPopup.dismiss();
    });
  }
     

}
