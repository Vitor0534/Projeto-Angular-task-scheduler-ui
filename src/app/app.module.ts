import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// todos os modulos que serão utilizados devem ser importados aqui
//import { NgxMaskModule, IConfig } from 'ngx-mask';
import { NgxMaskModule} from 'ngx-mask';
import {FlexLayoutModule} from "@angular/flex-layout";
import {AngularMaterialModule} from "./angular-material.module";
import {MatDividerModule} from "@angular/material/divider";
import { CadastroUsuarioComponent } from './components/usuarios/cadastro-usuario/cadastro-usuario.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {MAT_DATE_LOCALE} from "@angular/material/core";
import { LoginComponent } from './components/login/login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    CadastroUsuarioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //Quando se adiciona o importe adiciona o nome aqui também
    FlexLayoutModule,
    NgxMaskModule.forRoot(),
    AngularMaterialModule,
    MatDividerModule,
    FormsModule,
    //serve para conter as regras de negocio do cadastro
    ReactiveFormsModule,
    CommonModule


  ],
  providers: [
    //esse provide define que os elementos da material estarão em ptbr
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
