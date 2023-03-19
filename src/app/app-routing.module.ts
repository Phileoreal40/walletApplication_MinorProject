import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DemoComponent } from './components/demo/demo.component';
import { DetailsComponent } from './components/details/details.component';
import { DisplayAllWalletComponent } from './components/display-all-wallet/display-all-wallet.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {path:'', redirectTo:'/home',pathMatch:"full"},
  {path:'home',component:HomeComponent},
   {path:'demo',component:DemoComponent},
   {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
   {path:'details/:name',component:DetailsComponent},
   {path:'walletDisplay',component:DisplayAllWalletComponent},
  {path:'**',component:PageNotFoundComponent},
  {path:'update/:id',component:UpdateComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
