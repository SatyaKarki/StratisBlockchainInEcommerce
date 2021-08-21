import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ROOT_URL } from '../../_model/config';

@Injectable({
  providedIn: 'root'
})
export class SmartcontractService {

  constructor(private http: HttpClient) { }
  SmartContractReceipt(params: any) {
    return this.http.get(ROOT_URL + '/api/SmartContracts/receipt', { params: params });
  }
  SmartContractLocalCall(smartContractLocalCall: any) {
    return this.http.post(ROOT_URL + '/api/SmartContracts/local-call', smartContractLocalCall);
  }

}
