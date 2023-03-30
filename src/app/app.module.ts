import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { CalificacionComponent } from './Componentes/calificacion/calificacion.component';
import { VehiculosComponent } from './Paginas/Vehiculos/Vehiculos.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiculosComponent,
    CalificacionComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
