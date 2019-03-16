import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConfigProvider } from '../providers/config/config';
import { SlidePage } from '../pages/slide/slide';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html',
  providers: [
    ConfigProvider
  ]
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    configProvider: ConfigProvider) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      let config = configProvider.getConfig();

      if(config == null){
        this.rootPage = SlidePage;
        configProvider.setconfig(false);
      }else{
        this.rootPage = TabsPage;
      }
    });
  }
}
