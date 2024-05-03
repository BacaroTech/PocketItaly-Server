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

  public async findByUserIds(fromUserId:number,toUserId:number){
    return await this.repository.findOneBy({fromUserId,toUserId})
  }

  public async updateTokenTransaction(
    filter: Partial<TokenTransaction>,
    tokenTransaction: Partial<TokenTransaction>
  ) {
    return await this.repository.update(filter as any, tokenTransaction);
  }

  public async deleteTokenTransaction(id: number) {
    return await this.delete(id);
  }

  public async findById(id: number) {
    return await this.repository.findOneBy({
      id: id,
    });
  }

  public async findTransactionsByTokenId(tokenId: number) {
    return await this.repository.find({
      where:{
        tokenId:tokenId
      }
    });
  }


}
