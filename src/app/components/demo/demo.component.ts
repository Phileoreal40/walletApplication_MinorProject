import { Component } from '@angular/core';
import { wallet } from 'src/app/model/Wallet';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  title = 'minor_Project';
  date = new Date();
  imageSrc :String= "assets/wallet.jpg";
  name: String="Ford";
  password :String="";
  isVisible:boolean=true;
  a:number = 5;
  b:number = 20;
  // choice:String ="1";
  stringChoice="A";
  countryNames =  ["India","USA","London"];
  walletInfo:{id:number,name:String,balance:number} []=[
    {id:1,name:"Rahul",balance:20000.0},
    {id:2,name:"Aman",balance:32000.0},
    {id:3,name:"Priya",balance:40000.0}
  ] 
  wallet:wallet={id:0,name:"",balance:0};
  greetUser(){
    console.log("Welcome User");
  }
  displayName():void{
   // window.alert(this.name + ":" + this.password);
    console.log(this.name + ":" + this.password);
   // return;
  }
  displayWalletInfoForm(){
    console.log("displayWalletInfoForm()");
    console.log(this.wallet);
  }
}


