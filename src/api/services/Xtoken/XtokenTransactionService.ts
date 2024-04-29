import { Xtoken } from "@base/api/models/Xtokens/Xtoken";
import { XtokenTransaction } from "@base/api/models/Xtokens/XtokenTransaction";
import { XtokenRepository } from "@base/api/repositories/Xtokens/XtokenRepository";
import { XtokenTransactionRepository } from "@base/api/repositories/Xtokens/XtokenTransactionRepository";
import { Inject, Service } from "typedi";

@Service()
export class XtokenService {
  @Inject()
  private xTokenTransactionRepository: XtokenTransactionRepository;

  public async insertXtokenTransaction(xTokenTransaction: XtokenTransaction) {
    return await this.xTokenTransactionRepository.insertXtokenTransaction(xTokenTransaction);
  }

  public async updateXtokenTransaction(xTokenTransaction: XtokenTransaction) {
    return await this.xTokenTransactionRepository.updateXtokenTransaction(xTokenTransaction.id, xTokenTransaction);
      }


  public async deleteXtokenTransaction(id: number) {
    return await this.xTokenTransactionRepository.deleteXtokenTransaction(id);
  }
}