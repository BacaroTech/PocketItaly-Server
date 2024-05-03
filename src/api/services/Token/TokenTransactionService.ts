import { UserNotFoundException } from "@base/api/exceptions/Users/UserNotFoundException";
import { TokenTransaction } from "@base/api/models/Tokens/TokenTransaction";
import { TokenTransactionStatus, TransactionStatus } from "@base/api/models/Tokens/TokenTransactionStatus";
import { User } from "@base/api/models/Users/User";
import { TokenTransactionRepository } from "@base/api/repositories/Tokens/TokenTransactionRepository";
import { TokenTransactionStatusRepository } from "@base/api/repositories/Tokens/TokenTransactionStatusRepository";
import { UserRepository } from "@base/api/repositories/Users/UserRepository";
import { SendTokenBody } from "@base/api/schemas/Token/FlussoTokenSchema";
import { LoggedUser } from "@base/infrastructure/interfaces/controller.interfaces";
import { Inject, Service } from "typedi";

@Service()
export class TokenTransactionService {
  @Inject()
  private tokenTransactionRepository: TokenTransactionRepository;
    
  @Inject()
  private userRepository: UserRepository;

  @Inject()
  private tokenTransactionStatusRepository: TokenTransactionStatusRepository;


  public async insertTokenTransaction(tokenTransaction: Partial<TokenTransaction>) {
    return await this.tokenTransactionRepository.insertTokenTransaction(tokenTransaction);
  }

  public async updateTokenTransaction(tokenTransaction: TokenTransaction) {
    return await this.tokenTransactionRepository.updateTokenTransaction({id:tokenTransaction.id}, tokenTransaction);
      }


  public async deleteTokenTransaction(id: number) {
    return await this.tokenTransactionRepository.deleteTokenTransaction(id);
  }

  public async findTokenTransactionsByTokenId(tokenId:number){
    return await this.tokenTransactionRepository.findTransactionsByTokenId(tokenId)
  }


  public async createTokenTransaction(user: LoggedUser, data: SendTokenBody) {
    const receiverId = await this.userRepository.findOneByEmail(data.email);

    if (!receiverId) {
      throw new UserNotFoundException();
    }

    const tokenTransaction = {
      ...data,
      fromUserId: user.userId,
      toUserId: receiverId?.id,
      status: TransactionStatus.PENDING
    };

    //TODO INSERT INTO SINGLE SQL TRX
    const newTransaction = await this.insertTokenTransaction(tokenTransaction);
    const tokenTransactionStatus = {status: TransactionStatus.PENDING,transactionId: newTransaction.id};
    await this.tokenTransactionStatusRepository.insertTokenTransactionStatus(
      tokenTransactionStatus
    );
    return newTransaction
  }
}