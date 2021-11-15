import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FlexLayoutModule} from "@angular/flex-layout";
import { MenuComponent } from './menu/menu.component';
import { AstronomiaComponent } from './categorias/astronomia/astronomia.component';
import { EmpreendedorismoComponent } from './categorias/empreendedorismo/empreendedorismo.component';
import { HistoriaComponent } from './categorias/historia/historia.component';
import { RomanceComponent } from './categorias/romance/romance.component';
import { PoesiaComponent } from './categorias/poesia/poesia.component';
import { PinturaComponent } from './categorias/pintura/pintura.component';
import { NutricaoComponent } from './categorias/nutricao/nutricao.component';
import { MitologiaComponent } from './categorias/mitologia/mitologia.component';
import { MedicinaComponent } from './categorias/medicina/medicina.component';
import { JuvenilComponent } from './categorias/juvenil/juvenil.component';
import { HomeComponent } from './menu/home/home.component';

const routes: Routes = [
 {
  path: '', redirectTo: '/inicio', pathMatch: 'full'
},
{
 path: 'inicio', component: HomeComponent
},
{
  path: 'astronomia', component: AstronomiaComponent 
 },
 {
  path: 'empreendedorismo', component: EmpreendedorismoComponent 
 },
 {
  path: 'historia', component: HistoriaComponent
 },
 {
  path: 'juvenil', component: JuvenilComponent 
 },
 {
  path: 'medicina', component: MedicinaComponent 
 },
 {
  path: 'mitologia', component: MitologiaComponent 
 },
 {
  path: 'nutricao', component: NutricaoComponent 
 },
 {
  path: 'pintura', component: PinturaComponent 
 },
 {
  path: 'poesia', component: PoesiaComponent 
 },
 {
  path: 'romance', component: RomanceComponent 
 },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

