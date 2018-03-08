import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ActionSheetController } from 'ionic-angular';
import { EditProfileModalPage } from '../edit-profile-modal/edit-profile-modal';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  userId: any = 1;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalController: ModalController, public actionSheetCtrl: ActionSheetController) {
  }

  openEditProfileModal() {
    let profileModal = this.modalController.create(EditProfileModalPage, { userId: this.userId });
    profileModal.present();
  }

  editImage() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'تحديث الصورة',
      buttons: [
        {
          text: 'التقاط صورة',
          handler: () => {
            console.log('capture picture clicked');
          }
        },{
          text: 'اختر صورة من المعرض',
          handler: () => {
            console.log('select from gallery');
          }
        },{
          text: 'إغلاق',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
}
