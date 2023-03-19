import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { wallet } from 'src/app/model/Wallet';
import { WalletBackendService } from 'src/app/service/wallet-backend.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  msg: string = "";
  errorMsg: string = "";
  id: string | null = "";
  wallet:wallet=new wallet();

  constructor(private router:Router,private activatedRoute: ActivatedRoute, private WalletService: WalletBackendService) { }
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log("update id:" + this.id);
    this.WalletService.getWalletById(this.id).subscribe(
      {
        next: (data) => {
          this.wallet = data;
          console.log(data);

        },
        error: (error) => {
          console.log(Error);

        }
      }

    )

  }
  updateWallet(){
    console.log("Update wall:");
    console.log(this.wallet);
    this.WalletService.updateWallet(this.wallet).subscribe(
      
      {
        
        next:(data)=>{
          this.msg= "Wallet updated successfully";
          this.errorMsg= "";
          this.router.navigateByUrl("wallets");
        },
        error:(err)=>{
          console.log(err.error);
          this.msg= "";
          this.errorMsg= JSON.stringify(err.error);//"Wallet could not be updated successfully";

        }
      }
    )
  }


}
