import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { HomePage } from '../home/home';

const DATABASE_NAME: string = 'db.data';

@Component({
  selector: 'page-modifier',
  templateUrl: 'modifier.html'
})

export class ModifierPage {

  private db: SQLiteObject;
  
  public id1: number;
  jeux = [];

  Nom: string;
  Categorie: string;
  Editeur: string;
  Image: string;
  Date: string;
  Note: number;
  Prix: number;

  constructor(public navCtrl: NavController,  public navParams: NavParams, private sqlite: SQLite) {
    this.createDataBaseFile();
    this.id1 = navParams.get("id");
  }

  private createDataBaseFile(): void{
    this.sqlite.create({
        name: DATABASE_NAME,
        location: 'default'
    })
    .then((db: SQLiteObject) => {
        this.db = db;
        console.log("DB Creer");
        this.upJeux(this.id1);
    })
    .catch(e => console.log(e));
  }

  public upJeux( id: number) :void {
    
    this.jeux = [];
  
    this.db.executeSql('SELECT * FROM `Jeux` WHERE id = ?',[id])
    .then((data) => {
      
      if(data == null) {
          return;
      }
      console.log(data);
      if(data.rows) {
          if(data.rows.length > 0) {
              for(var i = 0; i < data.rows.length; i++) {
                  this.jeux.push({id: data.rows.item(i).id, Nom: data.rows.item(i).Nom, Categorie: data.rows.item(i).Categorie, Editeur: data.rows.item(i).Editeur, Image: data.rows.item(i).Image, Date: data.rows.item(i).Date, Note: data.rows.item(i).Note, Prix: data.rows.item(i).Prix});
              }
          }
      }
    });
  }

  public updateJeux() {

    this.db.executeSql('UPDATE `Jeux` SET Nom = "' + this.Nom + '", Categorie = "' + this.Categorie + '", Editeur = "' + this.Editeur + '", Image = "' + this.Image + '", Date = "' + this.Date + '",  Note = ' + this.Note + ', Prix = ' + this.Prix + ' WHERE id = ' + this.id1 , {})
    .then(() => {
        console.log('Jeu Updated');
        this.navCtrl.push(HomePage);
    })
    .catch(e => console.log(e));
  }

  
}