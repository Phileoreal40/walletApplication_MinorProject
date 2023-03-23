import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { wallet } from 'src/app/model/Wallet';
import { AuthService } from 'src/app/service/auth.service';

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
  walletdata:wallet={name:"",password:""};
 constructor(private router:Router,private authService: AuthService){}
  displayWalletInfoForm(){
    console.log("displayWalletInfoForm()");
    console.log(this.walletdata);
  }
  submitLoginForm(){
//    
console.log(this.walletdata);

this.authService.userLogin(this.walletdata).subscribe(
  {
    next:(data)=>{
      console.log(data);
      sessionStorage.setItem("user",JSON.stringify(data));
      console.log(data.jwt);
      sessionStorage.setItem("jwt",data.jwt);
      sessionStorage.setItem("role",data.role);
      
      //localStorage
      this.router.navigateByUrl("home");
    },
    error:(err)=>{
      console.log(err);
    }
  }
);
  }
  
}
