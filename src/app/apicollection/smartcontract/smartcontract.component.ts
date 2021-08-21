import { Component, OnInit } from '@angular/core';

import { SmartContractReceipt } from '../../_model/smartcontractreceipt';
import { SmartContractLocalCall } from '../../_model/smartcontractlocalcall';
import { SmartcontractService } from '../../_service/stratisfullnode/smartcontract.service';
import { HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-smartcontract',
  templateUrl: './smartcontract.component.html',
  styleUrls: ['./smartcontract.component.scss']
})
export class SmartcontractComponent implements OnInit {
  public smartContractReceipt: SmartContractReceipt = new SmartContractReceipt();
  public smartContractLocalCall: SmartContractLocalCall = new SmartContractLocalCall();
  constructor(private smartcontractService: SmartcontractService) { }
  resultGetReceipt: any;
  parameter: string = "";
  localCallResponseOut: any;
  ngOnInit(): void {
  
  }

  SmartContractReceipt() {
    let params = new HttpParams().set("txHash", this.smartContractReceipt.txHash);   
    this.smartcontractService.SmartContractReceipt(params).subscribe((response: any) => {
      if (response) {
        this.resultGetReceipt = response;       
        console.log(this.resultGetReceipt);
      } else {
        //  Swal.fire('Oops...', 'Something went wrong!, Please contact your administrator', 'error');
        alert('Opps!!!!');
        (error: any) => {
          console.log(error);
        }
      }
    }); 
  }

  SmartContractForLocalCall() {
   // this.smartContractLocalCall.parameters[0] = this.parameter;
    this.smartContractLocalCall.parameters= [];
   // this.smartContractWalletCreate.outpoints = [];
    this.smartcontractService.SmartContractLocalCall(this.smartContractLocalCall).subscribe((response: any) => {
      console.log(response);
      if (response) {
        this.localCallResponseOut = response;
        console.log(this.localCallResponseOut);
        //  alert('Load Successfully')
      } else {
        // Swal.fire('Oops...', 'Something went wrong!, Please contact your administrator', 'error');
        alert('Oops...');
        (error: any) => {
          console.log(error);
        }
      }
    });
  }
}
