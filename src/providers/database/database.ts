import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import 'rxjs/add/operator/map';


@Injectable()
export class DatabaseProvider {
  private db: SQLiteObject;
  private isOpen: boolean;
  
  constructor(public http: HttpClient, public storage: SQLite) {
    if(this.isOpen){
      this.storage = new SQLite();
      this.storage.create({
        name: "data.db",
        location: "default"
      }).then((db: SQLiteObject) => {
          this.db = db;
          db.executeSql("CREATE TABLE IF NOT EXISTS Categorie ( idConsole INTEGER PRIMARY KEY NOT NULL, nomCategorie TEXT )",[]);
          this.isOpen = true;
      }).catch((error) =>{
        console.log(error);
      })
    }
  }

  CreateJeux(idCategorie: number, nomCategorie: string){
    return new Promise((resolve, reject) => {
      let sql = "INSERT INTO Categorie  (idCategorie, nomCategorie) VALUES (?, ?)";
      this.db.executeSql(sql,[idCategorie,nomCategorie]).then((data) => {
        resolve(data);
      }, (error) => {
        reject(error);
      })
    })
  }

  GetAllJeux(){
    return new Promise((resolve, reject) => {
      let sql = "SELECT * FROM Categorie";
      this.db.executeSql(sql,[]).then((data) =>{
        let arrayJeux = [];

        if(data.rows.length > 0){
          for( var i = 0; i < data.rows.length; i++){
            arrayJeux.push({
              idCategorie: data.rows.item(i).idCategorie,
              nomCategorie: data.rows.item(i).nomCategorie
            });
          }
        }
        resolve(arrayJeux);
      }, (error) => {
        reject(error);
      })
    })
  }

}
