import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { wallet } from 'src/app/model/Wallet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  walletdata:wallet = new wallet();
  title = 'Wallet Application';
   name="";
   constructor(private router:Router){ }
   displayDetails(){
    console.log("details clicked"+ this.name);
    this.router.navigate(['details',{name:this.name}]);
   }
  imageSrc :String= "assets/wallet.jpg";
  
  
}
