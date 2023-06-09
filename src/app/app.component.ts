import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


//El componente principal de la aplicacion ideal para el registro de un usuario (obtener la informacion de este )
export class AppComponent implements OnInit{
  constructor(public authService: AuthService){}


  ngOnInit() {
    this.authService.initAuthListener();
  }

}
