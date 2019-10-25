import { Component } from '@angular/core';
import { StahnirozvrhService } from '../api/stahnirozvrh.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  //zde muzem definovat vlastnosti a properties
  private userInput:string=''
  private stahnirozvrhResult:any
  private loading:any


  constructor(
    private stahnirozvrhService: StahnirozvrhService,
    public loadingController: LoadingController
    ) {}

  //zde definuju funkce

  //OSX
  //spustit chrome takto v terminalu: open -a Google\ Chrome --args --disable-web-security --user-data-dir
  //Windows Open the start menu
  //Type windows+R or open "Run"
  //Execute the following command: chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security

  btnRozvrhClicked(){
    console.log(this.userInput);
    if (this.userInput.length > 5){
      this.presentLoading(); //zavolam loader pro zobrazeni nacitani
      //debugger; zastavi mi v kodu behem chodu stranky
      //zavolat API
      this.stahnirozvrhService.getRozvrh(this.userInput).subscribe( (response) => {
        //response from server is back, jdeme zpracovat odpoved
        console.log(response);
        this.stahnirozvrhResult=response["rozvrhovaAkce"];
        //hide loading dialog
        console.log(response["rozvrhovaAkce"]["0"]["nazev"]);
        this.loading.dismiss();
      } );
    }
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Čekám na získání rozvrhu...',
    });
    await this.loading.present();
  }

}
