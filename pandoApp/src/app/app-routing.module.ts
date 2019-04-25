import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VotacionesComponent } from './votaciones/votaciones.component';
import { ContactosComponent } from './contactos/contactos.component';
import { RegistroComponent } from './registro/registro.component';
import { InicioComponent } from './inicio/inicio.component';
import { ChatComponent } from './chat/chat.component';
import { ResultadosComponent } from './resultados/resultados.component';

const routes: Routes = [
  {path: 'login', component: InicioComponent, pathMatch: 'full'},
  {path:'contactos', component:ContactosComponent,pathMatch:'full'},
  {path:'chats', component:ChatComponent,pathMatch:'full'},
  {path:'inicio', component:InicioComponent,pathMatch:'full'},
  {path:'registro', component: RegistroComponent, pathMatch:'full'},
  {path:'usuarios', component: ContactosComponent, pathMatch:'full'},
  {path:'votaciones', component: VotacionesComponent, pathMatch:'full'}, 
  {path:'votaciones/:id', component: ResultadosComponent, pathMatch:'full'}, 
  {path:'conversacion/:idOrig/:idDest', loadChildren:'./chat/chat.module#ChatModule' },
  { path: '', redirectTo: 'inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],

  exports: [RouterModule]
})
export class AppRoutingModule { }
