import { RepositoryBase } from "@base/infrastructure/abstracts/RepositoryBase";
import { Service } from "typedi";
import { AppDataSource } from "@base/config/db";
import { TokenTransaction } from "@base/api/models/Tokens/TokenTransaction";

@Service()
export class TokenTransactionRepository extends RepositoryBase<TokenTransaction> {
  constructor() {
    super(AppDataSource.getRepository(TokenTransaction));
  }

  public async insertTokenTransaction(data: Partial<TokenTransaction>) {
    return await this.create(data);
  }

  public async updateTokenTransaction(
    id: number,
    tokenTransaction: TokenTransaction
  ) {
    return await this.update(id, tokenTransaction);
  }

  public async deleteTokenTransaction(id: number) {
    return await this.delete(id);
  }

  public async findById(id: number) {
    return await this.repository.findOneBy({
      id: id,
    });
  }

  public async findTransactionsByToken (tokenId: number) {
    return await this.repository.find({
      where:{
        tokenId:tokenId
      }
    });
  }


}
