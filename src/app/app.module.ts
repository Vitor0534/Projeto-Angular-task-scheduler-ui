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


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //Quando se adiciona o importe adiciona o nome aqui também
    FlexLayoutModule,
    NgxMaskModule.forRoot(),
    AngularMaterialModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
