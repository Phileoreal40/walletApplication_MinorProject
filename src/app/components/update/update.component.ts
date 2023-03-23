import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { wallet } from 'src/app/model/Wallet';
import { WalletBackendService } from 'src/app/service/wallet-backend.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  msg: string = "";
  errorMsg: string = "";

  
  walletdata: wallet = new wallet();
  id: string|null = "";
constructor(private router:Router ,private activatedRoute:ActivatedRoute, private walletService:WalletBackendService )
{}
ngOnInit(): void {

  this.id = this.activatedRoute.snapshot.paramMap.get("id");
  console.log("update id:" + this.id);
  this.walletService.getWalletById(this.id).subscribe(

    {
      next: (data) => {
        this.walletdata = data;
        console.log(data);

      },
      error: (error) => {
        console.log(Error);

      }
    }

  )

}

updateWallet(){
  console.log("Update emp:");
  console.log(this.walletdata);
  this.walletService.updateWallet(this.walletdata).subscribe(
    {
      next:(data)=>{
        this.msg= "Employee updated successfully";
        this.errorMsg= "";
        this.router.navigateByUrl("wallets");
      },
      error:(err)=>{
        console.log(err.error);
        this.msg= "";
        this.errorMsg= JSON.stringify(err.error);//"Employee could not be updated successfully";

      }
    }
  )
}
}
