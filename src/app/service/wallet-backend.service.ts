import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { wallet } from '../model/Wallet';

@Injectable({
  providedIn: 'root'
})
export class WalletBackendService {

  constructor(private httpClient:HttpClient) { }

  getWalletById(id:string|null):Observable<any>{
    return this.httpClient.get("http://localhost:9090/v1/wallet/"+id);
  }
  addWallet(newWallet:wallet):Observable<any>{
    let url:string = "http://localhost:9090/v1/wallet/";
    return this.httpClient.post(url,newWallet,{responseType:'json'});
  }
  updateWallet(walletdata:wallet):Observable<any>{
    return this.httpClient.put("http://localhost:9090/v1/wallet/",walletdata);
  }
  
  getAllWallets():Observable<any>{
    return this.httpClient.get("http://localhost:9090/v1/wallet/wallets");
  }
  deleteWalletById(id?:number):Observable<any>{
    return this.httpClient.delete("http://localhost:9090/v1/wallet/"+id);
  }
  addFunds(id?:number,balance?:number):Observable<any>{
    return this.httpClient.patch("http://localhost:9090/v1/wallet/addFund/"+id+"?balance="+balance,wallet);
    
  }
  
  withdrawFunds(id?:number,balance?:number):Observable<any>{
    return this.httpClient.patch("http://localhost:9090/v1/wallet/withdrawFund/"+id+"?balance="+balance,wallet)
  }
  tranferFunds(fromId?:number,toId?:number, balance?:number):Observable<any>{
    return this.httpClient.patch("http://localhost:9090/v1/wallet/tranferFunds/{fromId}/{toId}?fromId="+fromId+"&toId="+toId+"&amount="+balance,wallet);
  }
 

}
