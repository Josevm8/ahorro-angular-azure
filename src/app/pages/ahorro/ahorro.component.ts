import { AhorroResponse } from './../../_model/ahorroResponse';
import { AhorroService } from './../../_service/ahorro.service';
import { Tiempo } from './../../_model/tiempo';
import { Component, OnInit } from '@angular/core';
import { Ahorro } from './../../_model/ahorro';


@Component({
  selector: 'app-ahorro',
  templateUrl: './ahorro.component.html',
  styleUrls: ['./ahorro.component.css']
})
export class AhorroComponent implements OnInit {

  msj: string;
  monto: string;
  tasa: string;
  abono: string;
  total: string;
  rentab: string;
  combo_valor: number;
  lista_meses:Tiempo[]=[];
  ahorroResponse = null;

  constructor(private ahorroService: AhorroService) { }

  ngOnInit() {
    
    this.lista_meses.push(new Tiempo(3,"3 meses"))
    this.lista_meses.push(new Tiempo(6,"6 meses"))
    this.lista_meses.push(new Tiempo(12,"12 meses"))
    this.lista_meses.push(new Tiempo(18,"18 meses"))
  }

  nuevo(){
    this.monto = '';
    this.tasa = '';
    this.abono = '';
    this.total = '';
    this.rentab = '';
  }

  registrar(){
    let ahorro = new Ahorro();
    ahorro.monto = Number(this.monto);
    ahorro.tasa =  Number(this.tasa)/100;
    ahorro.abono = Number(this.abono);
    ahorro.tiempo = this.combo_valor;

    console.log(this.monto);
    console.log(Number(this.tasa)/100);
    console.log(this.abono);
    console.log(this.combo_valor);

    this.ahorroService.registrar(ahorro).subscribe(data => {
      //console.log(data);
      this.ahorroResponse = data;
      this.total = this.ahorroResponse.total;
      this.rentab = this.ahorroResponse.rentabilidad;
      console.log(this.ahorroResponse);
    })
  }

}
