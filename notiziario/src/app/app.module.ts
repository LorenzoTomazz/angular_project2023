import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SportComponent } from './sport/sport.component';
import { ScienzaComponent } from './scienza/scienza.component';
import { TecComponent } from './tec/tec.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SportComponent,
    ScienzaComponent,
    TecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
