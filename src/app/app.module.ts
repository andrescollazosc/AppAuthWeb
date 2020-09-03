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
import { BigAlertComponent } from './components/big-alert/big-alert.component';
import { ProductsViewComponent } from './pages/products-view/products-view.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { HerosComponent } from './pages/heros/heros.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { HeroComponent } from './pages/hero/hero.component';
import { BigCardComponent } from './components/big-card/big-card.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UserViewsComponent,
    CardUserComponent,
    SpinnerComponent,
    HeaderPagesComponent,
    UserSignupComponent,
    BigAlertComponent,
    ProductsViewComponent,
    HerosComponent,
    HeroCardComponent,
    HeroComponent,
    BigCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    PerfectScrollbarModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
