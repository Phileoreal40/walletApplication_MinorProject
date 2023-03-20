import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { wallet } from 'src/app/model/Wallet';
import { WalletBackendService } from 'src/app/service/wallet-backend.service';
import { WalletService } from 'src/app/service/wallet.service';

@Component({
  selector: 'app-withdraw-funds',
  templateUrl: './withdraw-funds.component.html',
  styleUrls: ['./withdraw-funds.component.css']
})
export class WithdrawFundsComponent {
  walletdata:wallet=new wallet();
  msg: string = "";
  errorMsg: string = "";
  id: any;
  balance: any;


  constructor (private activatedRoute:ActivatedRoute, private walletBackendService:WalletBackendService, private walletService:WalletService){ }
  withdrawFunds(id:number,balance:number):void{
    this.walletBackendService.withdrawFunds(id,balance).subscribe(
      {
        next:(data) =>{
          
          this.walletdata = data;
          console.log(data);
        },

        error:(error) =>{
          console.log(error.error);
          this.msg= "";
          this.errorMsg= JSON.stringify(error.error);
        },
        complete:() =>{
          this.msg = "Funds Withdrawed Successfully";
          this.errorMsg = "";
          console.log("Request Completed...");
        }
      }
    )
  }
}
