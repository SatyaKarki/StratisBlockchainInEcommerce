import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { WalletBuildTransaction } from '../_model/walletbuildtransaction';
import { WalletSendTransaction } from '../_model/walletsendtransaction';
import { Recepient } from '../_model/recipient';
import { WalletService } from '../_service/stratisfullnode/wallet.service';
import { StoreWalletAddress } from '../_model/config';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  public walletBuildTransaction: WalletBuildTransaction = new WalletBuildTransaction();
  public recipient: Recepient = new Recepient();
  public walletSendTransaction: WalletSendTransaction = new WalletSendTransaction();
  constructor(private walletService: WalletService ) { }
  builTransactionResponse: any;
  sendtransaction: any;
  payByWallet: boolean = false;
  totalCartAmount: any;
  //recipient: {
  //  destinationAddress: ''
  //  amount:''
  //};
  
  //destinationAddress: any;
  //amount: number = 0;
  ngOnInit(): void {
  }

  CheckoutToPay() {
    this.payByWallet = true;
    this.totalCartAmount = 1000;
    this.recipient.amount = this.totalCartAmount;
    this.recipient.destinationAddress = StoreWalletAddress; //gets the store wallet address from config;
  }
  BuildTransaction() {
    this.walletBuildTransaction.recipients = [];
    this.walletBuildTransaction.recipients[0] = this.recipient;
    this.walletService.WalletBuildTransaction(this.walletBuildTransaction).subscribe((response: any) => {
      console.log(response);
      if (response) {
        this.builTransactionResponse = response;
        console.log(this.builTransactionResponse);
        Swal.fire('Successful', 'Transaction Build Successfully', 'info');
        this.walletSendTransaction.hex = this.builTransactionResponse.hex
      } else {
         Swal.fire('Oops...', 'Something went wrong!, Please contact your administrator', 'error');       
        (error: any) => {
          console.log(error);
        }
      }
    });
  };

  SendTransaction() {
    this.walletService.WalletSendTransaction(this.walletSendTransaction).subscribe((response: any) => {
      console.log(response);
      if (response) {
        this.sendtransaction = response;
        console.log(this.sendtransaction);
        Swal.fire('Successful', 'Transaction Send  Successfully', 'info');
      } else {
         Swal.fire('Oops...', 'Something went wrong!, Please contact your administrator', 'error');  
        (error: any) => {
          console.log(error);
        }
      }
    });
  };
}
