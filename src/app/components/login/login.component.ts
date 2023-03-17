import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { wallet } from 'src/app/model/Wallet';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // walletInfo:{id:number,name:String,balance:number} []=[
  //   {id:1,name:"Rahul",balance:20000.0},
  //   {id:2,name:"Aman",balance:32000.0},
  //   {id:3,name:"Priya",balance:40000.0}
  // ] 
  wallet:wallet={name:"",password:""};
 // constructor(private router:Router){}
  displayWalletInfoForm(){
    console.log("displayWalletInfoForm()");
    console.log(this.wallet);
  }
//   submitLoginForm(){
//     console.log("displayWalletInfoForm()");
//     if(this.wallet.name=="Shruti"&& this.wallet.password=="shruti123")
//     {
// this.router.navigateByUrl("home");
//     }
//   }
  
}
