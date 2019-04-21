import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ContactosComponent } from './contactos/contactos.component';
import { CabeceraComponent } from 'src/app/cabecera/cabecera.component';
import { VotacionesComponent } from './votaciones/votaciones.component';
import { RegistroComponent } from './registro/registro.component';
import { InicioComponent } from './inicio/inicio.component';
import { ChatComponent } from './chat/chat.component';
import { LogoAnimadoComponent } from './logo-animado/logo-animado.component';
import { ConversacionComponent } from './chat/conversacion/conversacion.component';
import { ResultadosComponent } from './resultados/resultados.component';

const config: SocketIoConfig = { url: 'http://localhost:3000/animales', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    ContactosComponent,
    VotacionesComponent,
    CabeceraComponent,
    RegistroComponent,
    InicioComponent,
    ChatComponent,
    LogoAnimadoComponent,
    ConversacionComponent,
    ResultadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
