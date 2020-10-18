import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { HomeComponent } from './home/home.component';
import { FormSendService } from './form-send.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FormComponentComponent,
    ContactComponentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [FormSendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
