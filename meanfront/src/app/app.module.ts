import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { HttpClientModule } from '@angular/common/http'

//Formularios
import { ReactiveFormsModule } from '@angular/forms';

//Componentes
import { CrearProductoComponent } from './componentes/crear-producto/crear-producto.component';
import { ListarProductosComponent } from './componentes/listar-productos/listar-productos.component';


@NgModule({
  declarations: [
    AppComponent,
    CrearProductoComponent,
    ListarProductosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
