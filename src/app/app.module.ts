import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './mastertheme/topnav/topnav.component';
import { AsidenavComponent } from './mastertheme/asidenav/asidenav.component';
import { FooterComponent } from './mastertheme/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { WalletComponent } from './apicollection/wallet/wallet.component';
import { HttpClientModule } from '@angular/common/http';
import { SmartcontractwalletComponent } from './apicollection/smartcontractwallet/smartcontractwallet.component';
import { SmartcontractComponent } from './apicollection/smartcontract/smartcontract.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    AsidenavComponent,
    FooterComponent,
    HomeComponent,
    WalletComponent,
    SmartcontractwalletComponent,
    SmartcontractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
