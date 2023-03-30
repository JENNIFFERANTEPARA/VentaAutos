import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Datos',
  templateUrl: './Datos.component.html',
  styleUrls: ['./Datos.component.css']
})
export class DatosComponent implements OnInit {

 tituloPagina = "Registro del Cliente";
constructor(private _router: Router,) { }
ngOnInit(): void {
 }goInicio(): void {
 this._router.navigate([ '/inicio' ]);
 }
}
