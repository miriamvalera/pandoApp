import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VotacionesComponent } from './votaciones/votaciones.component';
import { ContactosComponent } from './contactos/contactos.component';
import { RegistroComponent } from './registro/registro.component';
import { InicioComponent } from './inicio/inicio.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  {path: 'login', component: InicioComponent, pathMatch: 'full'},
  {path:'chats', component:ChatComponent,pathMatch:'full'},
  {path:'inicio', component:InicioComponent,pathMatch:'full'},
  {path:'registro', component: RegistroComponent, pathMatch:'full'},
  {path:'contactos', component: ContactosComponent, pathMatch:'full'},
  {path:'votaciones', component: VotacionesComponent, pathMatch:'full'}, 
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
