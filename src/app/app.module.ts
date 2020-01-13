import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule ,ComponentsRout} from './app-routing.module';
import { AppComponent } from './app.component';

import { FullnameService } from './fullname.service';
import {HttpClientModule} from '@angular/common/http';
import { ErrorsComponent } from './errors/errors.component';


@NgModule({
  declarations: [
    AppComponent,
   ComponentsRout,
   ErrorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FullnameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
