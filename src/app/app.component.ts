import { Component } from '@angular/core';
import { DatiService } from './dati.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {

  // Controllano nel template quale tabella viene visualizzata
  visualizzaRegioni: boolean = false;
  visualizzaProvince: boolean = false;

  constructor(
    public datiService: DatiService
  ) {

  }

  /**
   * Associato alla pressione del pulsante "Regioni":
   * nasconde la tabella delle province e mostra quella delle regioni
  */
  onRegioni() {
    this.visualizzaRegioni = true;
    this.visualizzaProvince = false;
  }

  /**
   * Associato alla pressione del pulsante "Province":
   * nasconde la tabella delle regioni e mostra quella delle province
  */
  onProvince() {
    this.visualizzaRegioni = false;
    this.visualizzaProvince = true;
  }

}
