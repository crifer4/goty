import { Component, OnInit, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  firestore: Firestore = inject(Firestore);

  juegos: any[] = [];

  constructor( private db: AngularFirestore ){

  }
  ngOnInit(): void {

    this.db.collection('goty').valueChanges()
    .pipe(
      map( ( resp: any[] ) => {
        return resp.map( ({name, votos}) => ({name, value: votos}) )
        /* return resp.map( juego => {
          return {
            name: juego.name,
            value: juego.votos
          }
          }) */
      })
    )
    .subscribe( juegos => {
      this.juegos = juegos;
    });
  }
}
