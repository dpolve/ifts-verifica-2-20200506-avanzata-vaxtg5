import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TabellaRegioniComponent } from './tabella-regioni/tabella-regioni.component';
import { TabellaProvinceComponent } from './tabella-province/tabella-province.component';
import { DatiService } from './dati.service';
import { HttpClientModule } from '@angular/common/http';
import { SwapiService } from './swapi.service';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    TabellaRegioniComponent,
    TabellaProvinceComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [DatiService, SwapiService]
})
export class AppModule { }
