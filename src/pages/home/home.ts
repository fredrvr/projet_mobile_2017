import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { ModifierPage } from '../modifier/modifier';
import { FichePage } from '../fiche/fiche';

const DATABASE_NAME: string = 'db.data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private db: SQLiteObject;
  
  jeux = [];

  constructor(public navCtrl: NavController, private sqlite: SQLite) {
    this.createDataBaseFile();
    
  }

  private createDataBaseFile(): void{
    this.sqlite.create({
        name: DATABASE_NAME,
        location: 'default'
    })
    .then((db: SQLiteObject) => {
        this.db = db;
        console.log("DB Creer");
        this.createTable();
    })
    .catch(e => console.log(e));
  }

  private createTable(): void{
      this.db.executeSql('CREATE TABLE IF NOT EXISTS `Jeux` ( `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE, `Nom` TEXT, `Categorie` INTEGER, `Editeur` TEXT, `Image` TEXT, `Date` TEXT, `Note` INTEGER, `Prix` INTEGER, `Console` INTEGER NOT NULL, `Vente` INTEGER, `Panier` INTEGER, FOREIGN KEY(`Categorie`) REFERENCES `Categorie`(`idCategorie`) )', {})
      .then(() => {
          console.log("Table JEUX Creee");
          this.db.executeSql('CREATE TABLE IF NOT EXISTS `Categorie` ( `idCategorie` INTEGER NOT NULL, `nomCategorie` TEXT, PRIMARY KEY(`idCategorie`) )', {})
          .then(() => this.retrieveJeux())
          .catch(e => console.log(e));
      })
      .catch(e => console.log(e));
  }

  public retrieveJeux() {
    
        this.jeux = [];
        this.db.executeSql('SELECT * FROM `Jeux`', {})
        .then((data) => {

            if(data == null) {
                return;
            }

            if(data.rows) {
                if(data.rows.length > 0) {
                    for(var i = 0; i < data.rows.length; i++) {
                        this.jeux.push({id: data.rows.item(i).id, Nom: data.rows.item(i).Nom, Categorie: data.rows.item(i).Categorie, Editeur: data.rows.item(i).Editeur, Image: data.rows.item(i).Image, Panier: data.rows.item(i).Panier});
                    }
                }
            }
        });
    }

    openModifierPage(id: number) : void {
        
        this.navCtrl.push(ModifierPage, {
            id:id
        });
        
    }

    deleteJeux(id : number) : void {
        console.log(id);
        this.db.executeSql('DELETE FROM Jeux WHERE id=?', [id])
          .then(res => {
            console.log(res);
            this.retrieveJeux();
          })
          .catch(e => console.log(e));
    }

    openFichePage(id: number) : void {
        console.log("fiiiche:"+id);
        this.navCtrl.push(FichePage, {
            id:id
        });
    }

    ionViewWillEnter(){
        this.retrieveJeux();
    }

}
