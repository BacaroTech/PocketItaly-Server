import { Token } from "@base/api/models/Tokens/Token";
import { TransactionStatus } from "@base/api/models/Tokens/TokenTransactionStatus";
import { User } from "@base/api/models/Users/User";
import { ItemRepository } from "@base/api/repositories/Products/ItemRepository";
import { ProductRepository } from "@base/api/repositories/Products/ProductRepository";
import { TokenRepository } from "@base/api/repositories/Tokens/TokenRepository";
import { TokenTransactionRepository } from "@base/api/repositories/Tokens/TokenTransactionRepository";
import { TokenTransactionStatusRepository } from "@base/api/repositories/Tokens/TokenTransactionStatusRepository";
import { ValidateTokenBody } from "@base/api/schemas/Token/FlussoTokenSchema";
import { randomUUID } from "crypto";
import { Inject, Service } from "typedi";

@Service()
export class TokenService {

  @Inject()
  private tokenRepository: TokenRepository;

  @Inject()
  private tokenTransactionRepository: TokenTransactionRepository

  @Inject()
  private tokenTransactionStatusRepository: TokenTransactionStatusRepository;

  @Inject()
  private itemRepository: ItemRepository;

  public async insertToken(token: Token) {
    return await this.tokenRepository.insertToken(token);
  }

  public async updateToken(token: Token) {
    return await this.tokenRepository.updateToken(token.id, token);
  }

  public async deleteToken(id: number) {
    return await this.tokenRepository.deleteToken(id);
  }

  public async findOneTokenById(id: number) {
    return await this.tokenRepository.findById(id);
  }

  public async findTokensByUserId(userId: number) {
    return await this.tokenRepository.findTokensByUserId(userId);
  }

  public async findPendingTokens(user:User){
    return this.tokenRepository.findPendingTokens(user.id)
  }

  public async validateToken(user:User,data:ValidateTokenBody ){
    const token = await this.tokenRepository.findTokenSerialMatch(user.id,data.tokenId,data.serialCode)
    if (token) {
      await this.passToken(token.belongsTo,user.id,data.tokenId)
      return true
    }  
    return false
  }

  public async passToken(fromUserId:number,toUserId:number,tokenId:number){
    //TODO USE SQL TRANSACTION OR STORED PROCEDURE
    await this.tokenRepository.updateToken(tokenId,{belongsTo:toUserId})
    await this.tokenTransactionRepository.updateTokenTransaction({toUserId,fromUserId},{status:TransactionStatus.VERIFIED})
    const trx = await this.tokenTransactionRepository.findByUserIds(fromUserId,toUserId)
    await this.tokenTransactionStatusRepository.insertTokenTransactionStatus({status:TransactionStatus.VERIFIED,transactionId:trx?.id}) 
  }

  public async generateToken(user:User,companyId:number,productId:number,serialCode:string){
    const joinId = randomUUID()
    await this.itemRepository.insertItem({serialCode,productId,joinId})
    await this.tokenRepository.insertToken({belongsTo:user.id,issuedByCompany:companyId,issuedByUser:user.id,joinId})
    return true
  }

  public async tokenBelongsTo(userId:number,token:number){
    return !!await this.tokenRepository.repository.findOne({select:{id:true},where:{belongsTo:userId,id:token}})
  }

}
