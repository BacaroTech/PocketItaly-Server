import { TokenTransactionStatus } from "@base/api/models/Tokens/TokenTransactionStatus";
import { TokenTransactionStatusRepository } from "@base/api/repositories/Tokens/TokenTransactionStatusRepository";
import { Inject, Service } from "typedi";

@Service()
export class TokenTransactionStatusService {
  @Inject()
  private tokenTransactionStatusRepository: TokenTransactionStatusRepository;

  public async insertTokenTransactionStatus(tokenTransactionStatus: Partial<TokenTransactionStatus>) {
    return await this.tokenTransactionStatusRepository.insertTokenTransactionStatus(tokenTransactionStatus);
  }

  public async updateTokenTransactionStatus(tokenTransactionStatus: TokenTransactionStatus) {
    return await this.tokenTransactionStatusRepository.updateTokenTransactionStatus(tokenTransactionStatus.id, tokenTransactionStatus);
  }

  public async deleteTokenTransactionStatus(id: number) {
    return await this.tokenTransactionStatusRepository.delete(id);
  }

  public async findOneTokenTransactionStatusById(id: number) {
    return await this.tokenTransactionStatusRepository.findById(id);
  }
}