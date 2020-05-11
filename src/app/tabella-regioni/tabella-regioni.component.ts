import { Component, OnInit, Input } from '@angular/core';
import { Regione } from '../dati.model';

@Component({
  selector: 'app-tabella-regioni',
  templateUrl: './tabella-regioni.component.html',
  styleUrls: ['./tabella-regioni.component.css']
})
export class TabellaRegioniComponent implements OnInit {

  @Input() datiRegioni: Regione[] = [];

  constructor() { }

  ngOnInit() {
  }

}