import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  onSumit(valorFormulario: any) {
    console.log(valorFormulario)
  }
}
