import { Token } from "@base/api/models/Tokens/Token";
import { TokenTransaction } from "@base/api/models/Tokens/TokenTransaction";
import { TokenRepository } from "@base/api/repositories/Tokens/TokenRepository";
import { TokenTransactionRepository } from "@base/api/repositories/Tokens/TokenTransactionRepository";
import { Inject, Service } from "typedi";

@Service()
export class TokenService {
  @Inject()
  private tokenTransactionRepository: TokenTransactionRepository;

  public async insertTokenTransaction(tokenTransaction: TokenTransaction) {
    return await this.tokenTransactionRepository.insertTokenTransaction(tokenTransaction);
  }

  public async updateTokenTransaction(tokenTransaction: TokenTransaction) {
    return await this.tokenTransactionRepository.updateTokenTransaction(tokenTransaction.id, tokenTransaction);
      }


  public async deleteTokenTransaction(id: number) {
    return await this.tokenTransactionRepository.deleteTokenTransaction(id);
  }
}