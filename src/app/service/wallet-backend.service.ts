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
    let url:string = "http://localhost:9090/v1/wallet";
    return this.httpClient.post(url,newWallet,{responseType:'json'});
  }
  deleteWalletById(id?:number):Observable<any>{
    return this.httpClient.delete("http://localhost:9090/v1/wallet/"+id);
  }
  updateWallet(Wallet:wallet):Observable<any>{
    return this.httpClient.put("http://localhost:9090/v1/wallet",Wallet);
  }
  getAllWallet():Observable<any>{
    return this.httpClient.get("http://localhost:9090/v1/wallet");
  }
}
