import { Component, OnInit } from '@angular/core';
import { wallet } from 'src/app/model/Wallet';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit  {
  walletdata:wallet = new wallet();
  constructor(private authService:AuthService){}

  ngOnInit(): void {
    this.authService.getUserInfo().subscribe(
      {
        next:(data)=>{
          console.log(data);  
          this.walletdata= data;

        },
        error:(err)=>{
          console.log(err);
        }
      }
    )

    }}
