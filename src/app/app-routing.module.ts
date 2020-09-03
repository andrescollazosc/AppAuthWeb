import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserViewsComponent } from './pages/user-views/user-views.component';
import { RouterModel } from './constants/route.model';
import { UserSignupComponent } from './pages/user-signup/user-signup.component';
import { ProductsViewComponent } from './pages/products-view/products-view.component';
import { HerosComponent } from './pages/heros/heros.component';
import { HeroComponent } from './pages/hero/hero.component';

const ROUTE = { ...RouterModel.ROUTES };

const routes: Routes = [
  { path: ROUTE.HOME, component: HomeComponent },
  { path: ROUTE.USERS, component: UserViewsComponent },
  { path: ROUTE.SIGN_UP, component: UserSignupComponent },
  { path: ROUTE.PRODUCTS, component: ProductsViewComponent },
  { path: ROUTE.HEROS, component: HerosComponent },
  { path: ROUTE.HERO, component: HeroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
