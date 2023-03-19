import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';

import { DemoComponent } from './components/demo/demo.component';
import { HomeComponent } from './components/home/home.component';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DetailsComponent } from './components/details/details.component';
import { DisplayAllWalletComponent } from './components/display-all-wallet/display-all-wallet.component';
import { SearchPipe } from './pipes/search.pipe';
import { WalletService } from './service/wallet.service';
import { UpperPipe } from './pipes/upper.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { UpdateComponent } from './components/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,

    DemoComponent,
    HomeComponent,
  
    PageNotFoundComponent,
       DetailsComponent,
       DisplayAllWalletComponent,
       SearchPipe,
       UpperPipe,
       SortPipe,
       UpdateComponent,
     
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    CommonModule,
    
  ],
  providers: [WalletService],
  bootstrap: [AppComponent]
})
export class AppModule { }
