import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// Esta es el archivo componente principal del sitio web 
//donde se deben de declarar los demas componentes a crear
//para ello se importan el nombre que se le haya dado al export
//del archivo .ts creado, en este caso es GenerarAngularComponent
// y luego su respectiva direccion
import { GenerarAngularComponent } from './generar-angular/generar-angular.component';



@NgModule({
  declarations: [
    AppComponent,
    GenerarAngularComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
