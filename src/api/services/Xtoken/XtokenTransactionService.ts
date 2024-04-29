import { Xtoken } from "@base/api/models/Xtokens/Xtoken";
import { XtokenTransaction } from "@base/api/models/Xtokens/XtokenTransaction";
import { XtokenRepository } from "@base/api/repositories/Xtokens/XtokenRepository";
import { XtokenTransactionRepository } from "@base/api/repositories/Xtokens/XtokenTransactionRepository";
import { Inject, Service } from "typedi";

@Service()
export class XtokenService {
  @Inject()
  private xtokenTransactionRepository: XtokenTransactionRepository;

  public async insertXtokenTransaction(xtokenTransaction: XtokenTransaction) {
    return await this.xtokenTransactionRepository.insertXtokenTransaction(xtokenTransaction);
  }

  public async updateXtokenTransaction(xtokenTransaction: XtokenTransaction) {
    return await this.xtokenTransactionRepository.updateXtokenTransaction(xtokenTransaction.id, xtokenTransaction);
      }


  public async deleteXtokenTransaction(id: number) {
    return await this.xtokenTransactionRepository.deleteXtokenTransaction(id);
  }
}