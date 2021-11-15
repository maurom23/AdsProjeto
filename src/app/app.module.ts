import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';


import { MatToolbarModule} from '@angular/material/toolbar';
import { AstronomiaComponent } from './categorias/astronomia/astronomia.component';
import { EmpreendedorismoComponent } from './categorias/empreendedorismo/empreendedorismo.component';
import { HistoriaComponent } from './categorias/historia/historia.component';
import { JuvenilComponent } from './categorias/juvenil/juvenil.component';
import { MedicinaComponent } from './categorias/medicina/medicina.component';
import { MitologiaComponent } from './categorias/mitologia/mitologia.component';
import { NutricaoComponent } from './categorias/nutricao/nutricao.component';
import { PinturaComponent } from './categorias/pintura/pintura.component';
import { PoesiaComponent } from './categorias/poesia/poesia.component';
import { RomanceComponent } from './categorias/romance/romance.component';
import { HomeComponent } from './menu/home/home.component'
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AstronomiaComponent,
    EmpreendedorismoComponent,
    HistoriaComponent,
    JuvenilComponent,
    MedicinaComponent,
    MitologiaComponent,
    NutricaoComponent,
    PinturaComponent,
    PoesiaComponent,
    RomanceComponent,
    HomeComponent,
    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
