import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { wallet } from 'src/app/model/Wallet';
import { WalletBackendService } from 'src/app/service/wallet-backend.service';
import { WalletService } from 'src/app/service/wallet.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  walletdata:wallet=new wallet();
constructor(private walletService:WalletService,private walletBackEndService:WalletBackendService ){}
onSubmit(){
console.log(this.walletdata);
this.walletService.addWallet(this.walletdata);
let walletPost: Observable<any> =this.walletBackEndService.addWallet(this.walletdata);
walletPost.subscribe(
  {
    next:(data)=>{ // executes when back end reposnds with success status code
      console.log(data);
    },
    error:(error)=>{ // executes when back end responds with error status code
      console.log(error);
    },
    complete:()=>{ //
      console.log("Post request Completed...")
    }
  }
)
}

}
