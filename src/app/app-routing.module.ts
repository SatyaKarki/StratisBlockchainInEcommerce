import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WalletComponent } from './apicollection/wallet/wallet.component';
import { SmartcontractwalletComponent } from './apicollection/smartcontractwallet/smartcontractwallet.component';
import { SmartcontractComponent } from './apicollection/smartcontract/smartcontract.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
 // { path: '', component: WalletComponent, pathMatch: 'full' },
  { path: 'wallet', component: WalletComponent },
  { path: 'smartcontractwallet', component: SmartcontractwalletComponent },
  { path: 'smartcontract', component: SmartcontractComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
