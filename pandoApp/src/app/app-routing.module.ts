import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VotacionesComponent } from './votaciones/votaciones.component';
import { ContactosComponent } from 'src/app/contactos/contactos.component';

const routes: Routes = [
  {path:'contactos', component:ContactosComponent,pathMatch:'full'},
  
  {path:'votaciones', component:VotacionesComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
