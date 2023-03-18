import { Component } from '@angular/core';
import { wallet } from 'src/app/model/Wallet';
import { WalletService } from 'src/app/service/wallet.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
wallet:wallet=new wallet();
constructor(private walletService:WalletService ){}
onSubmit(){
console.log(this.wallet);
this.walletService.addWallet(this.wallet);
}

}
