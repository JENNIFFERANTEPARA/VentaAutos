import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CalificacionComponent } from './Componentes/calificacion/calificacion.component';
import { VehiculosComponent } from './Paginas/Vehiculos/Vehiculos.component';
import { DatosComponent } from './cliente/Paginacliente/Datos/Datos.component';
import { PrimeraComponent } from './inicio/pagina/primera/primera.component';
import { InfoComponent } from './informacion/informacion/info/info.component';
//import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    VehiculosComponent,
    CalificacionComponent,
  PrimeraComponent,
  DatosComponent,
   InfoComponent    
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    //RouterModule,
   //AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
