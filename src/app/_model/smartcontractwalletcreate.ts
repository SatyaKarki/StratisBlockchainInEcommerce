export class SmartContractWalletCreate {
  walletName: string = "";
  accountName: string = "";
  outpoints: Array<TransactionRequest> = [];
  amount: number = 0;
  password: string = "";
  feeAmount: string = "";
  contractCode: string = "";
  gasPrice: number = 10000;
  gasLimit: number=250000;
  sender: string="";

  parameters:Array<string>=[];
}
export class TransactionRequest {
  index: number = 0;
  transactionId: string = "";
}
