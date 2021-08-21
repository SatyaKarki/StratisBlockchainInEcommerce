import { Component, OnInit } from '@angular/core';
import { SmartContractWalletCreate } from '../../_model/smartcontractwalletcreate';
import { SmartcontractwalletService } from '../../_service/stratisfullnode/smartcontractwallet.service';
import { HttpParams } from '@angular/common/http';
import { SmartContractWalletCall } from '../../_model/smartcontractwalletcall';
@Component({
  selector: 'app-smartcontractwallet',
  templateUrl: './smartcontractwallet.component.html',
  styleUrls: ['./smartcontractwallet.component.scss']
})
export class SmartcontractwalletComponent implements OnInit {

  public smartContractWalletCreate: SmartContractWalletCreate = new SmartContractWalletCreate();
  public smartContractWalletCall: SmartContractWalletCall = new SmartContractWalletCall();
  constructor(private smartcontractwalletService: SmartcontractwalletService) { }
  contractOutputTrnHash: any;
  smartcontractWalletCallOutput: any;
  parameter: string = "";
  testparam: null;
  ngOnInit(): void {

  }
  SmartContractWalletCreate() {
    this.smartContractWalletCreate.outpoints = [];
    this.smartContractWalletCreate.parameters[0] = this.parameter;    
    if (this.parameter==="null") {
      this.smartContractWalletCreate.parameters = [];
    }    
   // this.smartContractWalletCreate.parameters[0] = this.parameter;
    this.smartcontractwalletService.SmartContractWalletCreate(this.smartContractWalletCreate).subscribe((response: any) => {
      console.log(response);
      if (response) {
        this.contractOutputTrnHash = response;
        console.log(this.contractOutputTrnHash);
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


  SmartContractWalletCall() {
    this.smartContractWalletCall.outpoints = [];
    this.smartContractWalletCall.parameters[0] = this.parameter;
    if (this.parameter === "null") {
      this.smartContractWalletCall.parameters = [];
    }
       this.smartcontractwalletService.SmartContractWalletCall(this.smartContractWalletCall).subscribe((response: any) => {
      console.log(response);
      if (response) {
        this.smartcontractWalletCallOutput = response;
        console.log(this.smartcontractWalletCallOutput);
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
