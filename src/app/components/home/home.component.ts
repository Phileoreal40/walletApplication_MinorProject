import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Wallet Application';
   name="";
   constructor(private router:Router){ }
   displayDetails(){
    console.log("details clicked"+ this.name);
    this.router.navigate(['details',{name:this.name}]);
   }
  imageSrc :String= "assets/wallet.jpg";
}
