import { RepositoryBase } from "@base/infrastructure/abstracts/RepositoryBase";
import { Service } from "typedi";
import { AppDataSource } from "@base/config/db";
import { XtokenTransactionStatus } from "@base/api/models/Xtokens/XtokenTransactionStatus";

@Service()
export class XtokenTransactionStatusRepository extends RepositoryBase<XtokenTransactionStatus> {
  constructor() {
    super(AppDataSource.getRepository(XtokenTransactionStatus));
  }

  public async insertXtokenTransactionStatus(data: Partial<XtokenTransactionStatus>) {
    return await this.create(data);
  }

  public async updateXtokenTransactionStatus(
    id: number,
    xtokenTransaction: XtokenTransactionStatus
  ) {
    return await this.update(id, xtokenTransaction);
  }

  public async deleteXtokenTransactionStatus(id: number) {
    return await this.delete(id);
  }

  public async findById(id: number) {
    return await this.repository.findOneBy({
      id: id,
    });
  }
}