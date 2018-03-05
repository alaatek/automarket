import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController} from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { SearchFilterPage } from '../search-filter/search-filter';
/**
 * Generated class for the SearchResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-result',
  templateUrl: 'search-result.html',
})
export class SearchResultPage {
	cat_id :any;
	items :any;
  items_count:any;
  constructor(public navCtrl: NavController,public restProvider: RestProvider, public navParams: NavParams, private loadingCtrl: LoadingController) {
  	this.cat_id= navParams.data.cat_id;
    this.getcatitems();
  }

  ionViewDidLoad() {
    
  }

  getcatitems(){
    console.log('ionViewDidLoad SearchResultPage'+this.cat_id);
    let loadingPopup = this.loadingCtrl.create({
      content: 'Loading data...'
    });
 
    // Show the popup
    loadingPopup.present();
    console.log("2");
    this.restProvider.getcat_items(this.cat_id)
    .then(data2 => { 
      this.items = (<any>data2).data;
      loadingPopup.dismiss();
      this.items_count = this.items.length;
      console.log(this.items.length);
      //alert(this.categories);
    });

    
  }


  ShowFilter(){
    this.navCtrl.push(SearchFilterPage);
  }
}
