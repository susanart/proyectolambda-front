import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


// external
import { NgxSpinnerModule } from "ngx-spinner";
import { ListComponent } from './materia/list.component';
import { HeaderComponent } from './header/header.component';
import { EstudianteComponent } from './estudiante/estudiante.component';




@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HeaderComponent,
    EstudianteComponent,
  
  ],
  imports: [
    BrowserModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
