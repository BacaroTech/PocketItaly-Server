import { Xtoken } from "@base/api/models/Xtokens/Xtoken";
import { XtokenTransactionStatus } from "@base/api/models/Xtokens/XtokenTransactionStatus";
import { XtokenRepository } from "@base/api/repositories/Xtokens/XtokenRepository";
import { XtokenTransactionStatusRepository } from "@base/api/repositories/Xtokens/XtokenTransactionStatusRepository";
import { Inject, Service } from "typedi";

@Service()
export class XtokenTransactionStatusService {
  @Inject()
  private xTokenTransactionStatusRepository: XtokenTransactionStatusRepository;

  public async insertXtokenTransactionStatus(xTokenTransactionStatus: Partial<XtokenTransactionStatus>) {
    return await this.xTokenTransactionStatusRepository.insertXtokenTransactionStatus(xTokenTransactionStatus);
  }

  public async updateXtokenTransactionStatus(xTokenTransactionStatus: XtokenTransactionStatus) {
    return await this.xTokenTransactionStatusRepository.updateXtokenTransactionStatus(xTokenTransactionStatus.id, xTokenTransactionStatus);
  }

  public async deleteXtokenTransactionStatus(id: number) {
    return await this.xTokenTransactionStatusRepository.delete(id);
  }

  public async findOneXtokenTransactionStatusById(id: number) {
    return await this.xTokenTransactionStatusRepository.findById(id);
  }
}