import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ROOT_URL } from '../../_model/config';
@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private http: HttpClient) { }

  LoadWallet(login:any) {
    return this.http.post(ROOT_URL + '/api/Wallet/load', login, { observe: 'response' });
  }
  WalletBalance(params:any) {
    return this.http.get(ROOT_URL + '/api/Wallet/balance', { params: params });
  }

  WalletSplitCoins(walletSplitCoin: any) {
    return this.http.post(ROOT_URL + '/api/Wallet/splitcoins', walletSplitCoin);
  }
  WalletBuildTransaction(walletBuildTransaction: any) {
    return this.http.post(ROOT_URL + '/api/Wallet/build-transaction', walletBuildTransaction);
  }

  WalletSendTransaction(walletSendTransaction: any) {
    return this.http.post(ROOT_URL + '/api/Wallet/send-transaction', walletSendTransaction);
  }
  
}
