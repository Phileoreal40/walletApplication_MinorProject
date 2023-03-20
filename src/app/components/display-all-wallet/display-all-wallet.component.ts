import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { wallet } from 'src/app/model/Wallet';
import { WalletBackendService } from 'src/app/service/wallet-backend.service';
import { WalletService } from 'src/app/service/wallet.service';

@Component({
  selector: 'app-display-all-wallet',
  templateUrl: './display-all-wallet.component.html',
  styleUrls: ['./display-all-wallet.component.css']
})
export class DisplayAllWalletComponent implements OnInit{
  walletdata:wallet[]=[];
  httpClient: any;
  msg: string = "";
  errorMsg: string = "";
 
  constructor(private router:Router,private walletService:WalletService,private walletBackEndService:WalletBackendService ){ }
  ngOnInit(): void {
 //  this.walletdata = this.walletService. getAllWallets();
 this.walletBackEndService.getAllWallets().subscribe({
next: (data) => {
  console.log(data);
  this.walletdata = data;
},
error: (err) => {
  console.log(err);

},
complete: () => { }

}
 )
}
deleteWallet(id?: number): void{
  console.log("Delete wal id:" + id);
  if(window.confirm("Do you want to delete Wallet>?"))
  this.walletBackEndService.deleteWalletById(id).subscribe({
    next:(data) => {
      this.msg = "Wallet Deleted Successfully. Id:" + id;
      this.errorMsg = "";

      this.walletdata=this.walletdata.filter((wal) => {
        console.log("emp.id:" + wal.id);
        console.log("id:" + id);

        if (wal.id != id) {
          console.log("true :" + wal.id);
          return true;
        }

        else {
          console.log("false :" + wal.id);
          return false;

      }});
      console.log(this.walletdata);
     
    },
    error: () => {
      this.errorMsg = "Wallet Could not be deletd.";
      this.msg = "";
    },
    complete: () => { }
    }
)}


updateWallet(wal: wallet) {
  console.log("Update wallet"+ wal);

  this.router.navigate(['update', wal.id]);
}
addFunds(){
  this.router.navigate(['funds']);

}

withdrawFunds(){
  this.router.navigate(['withdrawFunds']);

}

tranferFunds(){
  this.router.navigate(['tranferFunds']);

}

  }

