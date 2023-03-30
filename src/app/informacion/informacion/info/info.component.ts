import { Component, OnInit } from '@angular/core';
import { infoService } from 'src/app/Servicios/vehiculo.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})

export class InfoComponent implements OnInit {

  constructor(private infoService:infoService) { }
  filtrarpor:string = " ";

  listacliente:any[]=[];

  MostrarImagen: boolean = false;

  ngOnInit() {
   this.listacliente = this.infoService.getClientes();
}
//registra(cliente:any){
  //alert("los clientes es:"+ this.listacliente.nombre);
//}
}