import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserViewsComponent } from './pages/user-views/user-views.component';
import { RouterModel } from './constants/route.model';

const ROUTE = { ...RouterModel.ROUTES };

const routes: Routes = [
  { path: ROUTE.HOME, component: HomeComponent },
  { path: ROUTE.USERS, component: UserViewsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
