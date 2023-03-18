import { Component, OnInit } from '@angular/core';
import { wallet } from 'src/app/model/Wallet';
import { WalletService } from 'src/app/service/wallet.service';

@Component({
  selector: 'app-display-all-wallet',
  templateUrl: './display-all-wallet.component.html',
  styleUrls: ['./display-all-wallet.component.css']
})
export class DisplayAllWalletComponent implements OnInit{
  walletdata:wallet[]=[];
  constructor(private walletService:WalletService){}
  ngOnInit(): void {
   this.walletdata = this.walletService. getAllWallets();//load data from service to local memeber
  }
}
