import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ROOT_URL } from '../../_model/config';

@Injectable({
  providedIn: 'root'
})
export class SmartcontractwalletService {

  constructor(private http: HttpClient) { }

  SmartContractWalletCreate(smartContractWalletCreate: any) {
    return this.http.post(ROOT_URL + '/api/SmartContractWallet/create', smartContractWalletCreate);
  }

  SmartContractWalletCall(smartContractWalletCall: any) {
    return this.http.post(ROOT_URL + '/api/SmartContractWallet/call', smartContractWalletCall);
  }

}
