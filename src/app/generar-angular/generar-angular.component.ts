import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generar-angular',
  templateUrl: './generar-angular.component.html',
  styleUrls: ['./generar-angular.component.css']
})
export class GenerarAngularComponent implements OnInit {
	tittle = 'Bienvenido mi primer componente'

  constructor() { }

  ngOnInit() {
  }

}
