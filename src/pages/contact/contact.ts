import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController,LoadingController  } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { SearchResultPage } from '../search-result/search-result';
import { SearchFilterPage } from '../search-filter/search-filter';
import { AddAdvertismentPage } from '../add-advertisment/add-advertisment';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
// provider : 'RestProvider'
})
export class ContactPage {
	categories: any;
  constructor(public navCtrl: NavController,public restProvider: RestProvider, private loadingCtrl: LoadingController) {
  	this.getcategories();
  	//for (var i = 0; i < categories.length; ++i) {
  	//	//this.getcategory_content(categories[i].id_ss);
  	//}
  	console.log("a sd"); 
  	//alert("this.categories");
  }   

   getcategories() {    

  	// Create the popup
    let loadingPopup = this.loadingCtrl.create({
      content: 'Loading data...'
    }); 
                      
   
    // Show the popup
    loadingPopup.present();
  	console.log("2");
    this.restProvider.getCategories()
    .then(data2 => {
      this.categories = (<any>data2).data;
      loadingPopup.dismiss();
      console.log(this.categories);
      //alert(this.categories);
    });
    console.log("3");  
  }

 
  showmore(id){
  	this.navCtrl.push(SearchResultPage,{cat_id : id});
  } 
  ShowFilter(){
    this.navCtrl.push(SearchFilterPage);
  }

  showAddAdvertisment() {
    this.navCtrl.push(AddAdvertismentPage);
  }

  showProfilePage() {
    this.navCtrl.push(ProfilePage);
  }
 /* getcategory_content(cat_id){
  	var cars = ["Saab", "Volvo", "BMW"];
  	/*this.restProvider.get_Category_items(cat_id)
    .then(data => {
      items = data.data;

    });*/
    /*return cars;
  }*/

}
