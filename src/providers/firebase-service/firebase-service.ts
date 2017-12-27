import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class FirebaseServiceProvider {

  constructor(public afd: AngularFireDatabase) {

  }

  getJeux(){
    return this.afd.list('/Jeux');
  }
  
  addJeux(name){
    this.afd.list('/Jeux/').push(name);
  }

  removeJeux(id){
    this.afd.list('/Jeux/').remove(id);
  }

  getId(){

    var fred;

    fred = this.afd.list('/Jeux', {
      query: {
        orderByChild: 'id',
        equalTo: '22' 
      }
    });

    /*this.afd.list('/users', { preserveSnapshot: true})
    .subscribe(snapshots=>{
        snapshots.forEach(snapshot => {
          if(snapshot.key == 0){
            console.log(snapshot.key, snapshot.val());
          }
        });
    })*/

    return fred;
  }
  
}
