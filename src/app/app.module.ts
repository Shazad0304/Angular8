import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule ,ComponentsRout} from './app-routing.module';
import { AppComponent } from './app.component';

import { FullnameService } from './fullname.service';
import {HttpClientModule} from '@angular/common/http';
import { ErrorsComponent } from './errors/errors.component';
import { ChildRouteComponent } from './child-route/child-route.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';


@NgModule({
  declarations: [
    AppComponent,
   ComponentsRout,
   ErrorsComponent,
   ChildRouteComponent,
   FormsComponent,
   ReactiveformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [FullnameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
