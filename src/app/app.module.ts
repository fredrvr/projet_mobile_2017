import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AjoutPage } from '../pages/ajout/ajout';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ModifierPage } from '../pages/modifier/modifier';
import { FichePage } from '../pages/fiche/fiche';
import { PanierPage } from '../pages/panier/panier';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireDatabaseModule} from 'angularfire2/database'
import { AngularFireModule } from 'angularfire2';
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';

import { DatabaseProvider } from '../providers/database/database';
import { SQLite } from '@ionic-native/sqlite';
import { IonicStorageModule } from '@ionic/storage'
import { SQLitePorter } from '@ionic-native/sqlite-porter';


export const firebaseConfig = {
  apiKey: "AIzaSyAYjPxtmhS6ZIKSHezVEogNHOM8O5Uep08",
  authDomain: "megagame-9e45b.firebaseapp.com",
  databaseURL: "https://megagame-9e45b.firebaseio.com",
  projectId: "megagame-9e45b",
  storageBucket: "",
  messagingSenderId: "83466894837"
};

@NgModule({
  declarations: [
    MyApp,
    AjoutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FichePage,
    ModifierPage,
    PanierPage
  ],
    
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AjoutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FichePage,
    ModifierPage,
    PanierPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    SQLitePorter,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseServiceProvider,
    DatabaseProvider
  ]
})
export class AppModule {}
