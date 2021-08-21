import { Recepient } from "./recipient";

export class WalletBuildTransaction {
  walletName: string = "";
  password: string = "";

  accountName: string = "";
  feeType: string = "Low";
  allowUnconfirmed: boolean = true;
  shuffleOutputs: boolean = true;
  changeAddress: string = "";
  recipients: Array<Recepient> = [];
}
//export class Recepient {
//  destinationAddress: string = "";
//  amount: number = 0;
//}
