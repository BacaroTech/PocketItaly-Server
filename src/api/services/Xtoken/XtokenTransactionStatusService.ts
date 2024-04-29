import { Xtoken } from "@base/api/models/Xtokens/Xtoken";
import { XtokenTransactionStatus } from "@base/api/models/Xtokens/XtokenTransactionStatus";
import { XtokenRepository } from "@base/api/repositories/Xtokens/XtokenRepository";
import { XtokenTransactionStatusRepository } from "@base/api/repositories/Xtokens/XtokenTransactionStatusRepository";
import { Inject, Service } from "typedi";

@Service()
export class XtokenTransactionStatusService {
  @Inject()
  private xtokenTransactionStatusRepository: XtokenTransactionStatusRepository;

  public async insertXtokenTransactionStatus(xtokenTransactionStatus: Partial<XtokenTransactionStatus>) {
    return await this.xtokenTransactionStatusRepository.insertXtokenTransactionStatus(xtokenTransactionStatus);
  }

  public async updateXtokenTransactionStatus(xtokenTransactionStatus: XtokenTransactionStatus) {
    return await this.xtokenTransactionStatusRepository.updateXtokenTransactionStatus(xtokenTransactionStatus.id, xtokenTransactionStatus);
  }

  public async deleteXtokenTransactionStatus(id: number) {
    return await this.xtokenTransactionStatusRepository.delete(id);
  }

  public async findOneXtokenTransactionStatusById(id: number) {
    return await this.xtokenTransactionStatusRepository.findById(id);
  }
}