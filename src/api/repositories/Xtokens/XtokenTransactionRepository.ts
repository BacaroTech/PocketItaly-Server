import { RepositoryBase } from "@base/infrastructure/abstracts/RepositoryBase";
import { Service } from "typedi";
import { AppDataSource } from "@base/config/db";
import { XtokenTransaction } from "@base/api/models/Xtokens/XtokenTransaction";

@Service()
export class XtokenTransactionRepository extends RepositoryBase<XtokenTransaction> {
  constructor() {
    super(AppDataSource.getRepository(XtokenTransaction));
  }

  public async insertXtokenTransaction(data: Partial<XtokenTransaction>) {
    return await this.create(data);
  }

  public async updateXtokenTransaction(
    id: number,
    xtokenTransaction: XtokenTransaction
  ) {
    return await this.update(id, xtokenTransaction);
  }

  public async deleteXtokenTransaction(id: number) {
    return await this.delete(id);
  }

  public async findById(id: number) {
    return await this.repository.findOneBy({
      id: id,
    });
  }

  public async findTransactionsByXtoken (xtokenId: number) {
    return await this.repository.find({
      where:{
        xtokenId:xtokenId
      }
    });
  }


}
