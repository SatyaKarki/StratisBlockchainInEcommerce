export class SmartContractWalletCall {
  walletName: string = "";
  accountName: string = "";
  outpoints: Array<TransactionRequest> = [];
  contractAddress: string = "";
  methodName: string = "";
  amount: number = 0;
  password: string = "";
  feeAmount: string = "";
  gasPrice: number = 10000;
  gasLimit: number = 250000;
  sender: string = "";

  parameters: Array<string> = [];
}
export class TransactionRequest {
  index: number = 0;
  transactionId: string = "";
}
