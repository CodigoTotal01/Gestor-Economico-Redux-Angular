import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }


  onSumit(data: any) {
    const {nombre, email, password} = data;
    this.authService.crearUsuario(nombre, email, password);
  }
}
