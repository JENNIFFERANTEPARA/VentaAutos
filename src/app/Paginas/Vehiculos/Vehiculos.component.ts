import { Component, OnInit } from '@angular/core';
import { VehiculoService } from 'src/app/Servicios/vehiculo.service';

@Component({
  selector: 'app-Vehiculos',
  templateUrl: './Vehiculos.component.html',
  styleUrls: ['./Vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

  constructor(private VehiculoService:VehiculoService) { }
  filtrarpor:string = " ";

  listaAutos:any[]=[];

  MostrarImagen: boolean = false;

  ngOnInit() {
   this.listaAutos = this.VehiculoService.getVehiculos();
}

}
