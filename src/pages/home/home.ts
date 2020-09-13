import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Chat1Page } from '../chat1/chat1';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pic:any

  public category: string = 'CHATS';
  public categories: Array<string> = ['camera','CHATS', 'STATUS', 'CALLS']

  constructor(public navCtrl: NavController, private camera: Camera) { }

  next(){
    this.navCtrl.push(Chat1Page);
  }

  onTabChanged(tabName) {
    this.category = tabName;
  }

  cam(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;
     this.pic = base64Image;
    }, (err) => {
     // Handle error
    });
  }

}
