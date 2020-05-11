import { Component, OnInit, Input } from '@angular/core';
import { Provincia } from '../dati.model';

@Component({
  selector: 'app-tabella-province',
  templateUrl: './tabella-province.component.html',
  styleUrls: ['./tabella-province.component.css']
})
export class TabellaProvinceComponent implements OnInit {

  @Input() datiProvince: Provincia[] = [];

  constructor() { }

  ngOnInit() {
  }

}