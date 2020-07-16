import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { UserViewsComponent } from './pages/user-views/user-views.component';
import { CardUserComponent } from './components/card-user/card-user.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { HeaderPagesComponent } from './components/header-pages/header-pages.component';
import { UserSignupComponent } from './pages/user-signup/user-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UserViewsComponent,
    CardUserComponent,
    SpinnerComponent,
    HeaderPagesComponent,
    UserSignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
