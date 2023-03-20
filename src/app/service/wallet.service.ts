import { Injectable, OnInit } from '@angular/core';
import { wallet } from '../model/Wallet';


@Injectable({
  providedIn: 'root'
})
export class WalletService implements OnInit{
walletdata:wallet[]=[];
//CRUD
  constructor() { 
    this.walletdata.push(new wallet(1,"Rahul",25000));
    this.walletdata.push(new wallet(2,"Rajat",35000));
    this.walletdata.push(new wallet(3,"Rohan",45000));
    this.walletdata.push(new wallet(4,"Arun",50000));
  }
  ngOnInit(): void {
      //throw new Error('Method not implemented.');
  }
  getAllWallets():wallet[]{
    return this.walletdata;
  }
  addWallet(newWallet:wallet):void{

    this.walletdata.push(newWallet);
  }

  updateWallet():void{
    console.log("Wallet Updated");
  }

  addFunds():void{
    console.log("Funds Tranfered");
  }


}
