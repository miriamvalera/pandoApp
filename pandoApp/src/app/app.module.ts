import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ContactosComponent } from './contactos/contactos.component';
import { CabeceraComponent } from 'src/app/cabecera/cabecera.component';
import { VotacionesComponent } from './votaciones/votaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactosComponent,
    VotacionesComponent,
    CabeceraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
