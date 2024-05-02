import { RepositoryBase } from "@base/infrastructure/abstracts/RepositoryBase";
import { Service } from "typedi";
import { AppDataSource } from "@base/config/db";
import { TokenTransactionStatus } from "@base/api/models/Tokens/TokenTransactionStatus";

@Service()
export class TokenTransactionStatusRepository extends RepositoryBase<TokenTransactionStatus> {
  constructor() {
    super(AppDataSource.getRepository(TokenTransactionStatus));
  }

  public async insertTokenTransactionStatus(data: Partial<TokenTransactionStatus>) {
    return await this.create(data);
  }

  public async updateTokenTransactionStatus(
    id: number,
    tokenTransaction: TokenTransactionStatus
  ) {
    return await this.update(id, tokenTransaction);
  }

  public async deleteTokenTransactionStatus(id: number) {
    return await this.delete(id);
  }

  public async findById(id: number) {
    return await this.repository.findOneBy({
      id: id,
    });
  }
}