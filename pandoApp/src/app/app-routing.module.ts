import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VotacionesComponent } from './votaciones/votaciones.component';
import { ContactosComponent } from 'src/app/contactos/contactos.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: 'login', component: InicioComponent, pathMatch: 'full' },
  { path: 'contactos', component: ContactosComponent, pathMatch: 'full' },

  { path: 'votaciones', component: VotacionesComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
