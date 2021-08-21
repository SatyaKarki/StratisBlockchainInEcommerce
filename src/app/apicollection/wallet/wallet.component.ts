import { Component, OnInit } from '@angular/core';
import { WalletLoad } from '../../_model/walletload';
import { WalletService } from '../../_service/stratisfullnode/wallet.service';
import { WalletBalance } from '../../_model/walletbalance';
import { WalletSplitCoin } from '../../_model/walletsplitcoins';
import { HttpParams } from '@angular/common/http';
import Swal from 'sweetalert2';
//import Swal from 'sweetalert2';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {
  public login: WalletLoad = new WalletLoad();
  public walletbalance: WalletBalance = new WalletBalance();
  public walletSplitCoin: WalletSplitCoin = new WalletSplitCoin();
  isConnected: boolean = false;
  walletInfos: any;
  walletbalances: any;
  walletSplitedCoins: any;
  constructor( private stratisFullNode: WalletService ) { }

  IncludeBalanceByAddress: any = ['true', 'false']

  ngOnInit(): void {
    this.LoadWallet();
  }
  LoadWallet() {
    //this.login.name = "cirrusdev";
    //this.login.password = "password";
    this.stratisFullNode.LoadWallet(this.login).subscribe((response: any) => {
      console.log(response);
      if (response.ok) {
        this.isConnected = true;
      //  console.log(response);
        Swal.fire('Successful', 'Full Node Connection successful', 'info');
      } else {
       Swal.fire('Oops...', 'Something went wrong!, Please contact your administrator', 'error');
        //alert('Oops...');
        (error: any) => {
          console.log(error);
        }
      }
    });
  }

  WalletBalance() {
    let params = new HttpParams().set("WalletName", this.walletbalance.walletname).set("AccountName", this.walletbalance.accountname).set("IncludeBalanceByAddress", this.walletbalance.includebalancebyaddress);
    this.stratisFullNode.WalletBalance(params).subscribe((response: any) => {
      if (response.balances) {
        this.walletbalances = response.balances;
        //console.log(data);
        console.log(this.walletbalances);
      } else {
      //  Swal.fire('Oops...', 'Something went wrong!, Please contact your administrator', 'error');
        alert('Opps!!!!');
        (error: any) => {
          console.log(error);
        }
      }
    });
  }

  WalletAplitCoins() {   
    this.stratisFullNode.WalletSplitCoins(this.walletSplitCoin).subscribe((response: any) => {
      console.log(response);
      if (response.outputs) {
        this.walletSplitedCoins = response.outputs;
        console.log(this.walletSplitedCoins);
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

  simpleAlert() {

  }
}
