import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";

import * as firebase from 'firebase/auth'
import { User } from 'firebase/auth'; // importar User desde el modulo @angular/fire/compat/auth


//UI class  -  for notifications
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth,
              private router: Router) { }


  initAuthListener(){
      this.afAuth.authState.subscribe((fbUser ) => {
          console.log(fbUser?.displayName)
      });

  }

  crearUsuario(nombre: string, email:string, password:string){
    this.afAuth.createUserWithEmailAndPassword(email, password).then(resp => {
      console.log(resp);
      this.router.navigate(['/']);
    })
      .catch(error => {
          Swal.fire('Error en el Login', error.message, 'error')
      })
  }


  login(email: string, password: string){
    this.afAuth.signInWithEmailAndPassword(email, password).then(resp => {
      console.log(resp);
     this.router.navigate(['/']);
    })
        .catch(error => {
          console.log(error)
            Swal.fire('Error en el Login', error.message, 'error')
        })
  }


  logout(){
      this.router.navigate(['/login'])
      this.afAuth.signOut();
  }

}
