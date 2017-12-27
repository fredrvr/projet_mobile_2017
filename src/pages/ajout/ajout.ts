import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { ToastController } from 'ionic-angular';

const DATABASE_NAME: string = 'db.data';


@Component({
  selector: 'page-ajout',
  templateUrl: 'ajout.html'
})


export class AjoutPage {

    private db: SQLiteObject;

    jeux: string[] = [];

    Nom: string;
    Categorie: string;
    Editeur: string;
    Image: string;
    Date: string;
    Note: number;
    Prix: number;

    constructor(public navCtrl: NavController, private sqlite: SQLite,  private toastCtrl: ToastController) {
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
            .then(() => console.log('Table Categorie Creee'))
            .catch(e => console.log(e));
        })
        .catch(e => console.log(e));
    }

    public addJeux() {
        
        console.log('INSERT INTO `Jeux` (`Nom`, `Categorie`, `Editeur`, `Image`, `Date`, `Note`, `Prix`,`Console`, `Vente`, `Panier`) VALUES ("' + this.Nom + '","' + this.Categorie + '", "' + this.Editeur + '", "' + this.Image + '", "' + this.Date + '", "' + this.Note + '", "' + this.Prix + '",1,0,0)');

        this.db.executeSql('INSERT INTO `Jeux` (`Nom`, `Categorie`, `Editeur`, `Image`, `Date`, `Note`, `Prix`,`Console`, `Vente`, `Panier`) VALUES ("' + this.Nom + '","' + this.Categorie + '", "' + this.Editeur + '", "' + this.Image + '", "' + this.Date + '", "' + this.Note + '", "' + this.Prix + '",1,0,0)', {})
        .then(() => {
            console.log('Jeux insere');
            this.ajoutToast();
        })
        .catch(e => console.log(e));
    }

    ajoutToast() {
        let toast = this.toastCtrl.create({
          message: 'Votre Jeu a été ajouté à la BDD',
          duration: 5000,
          position: 'top',
          cssClass: "toast_color"
        });
      
        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });
      
        toast.present();
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
                        this.jeux.push(data.rows.item(i).Nom);
                    }
                }
            }
        });
    }

}