import { RepositoryBase } from "@base/infrastructure/abstracts/RepositoryBase";
import { Service } from "typedi";
import { AppDataSource } from "@base/config/db";
import { Token } from "@base/api/models/Tokens/Token";
import { TransactionStatus } from "@base/api/models/Tokens/TokenTransactionStatus";

@Service()
export class TokenRepository extends RepositoryBase<Token> {
  constructor() {
    super(AppDataSource.getRepository(Token));
  }

  public async insertToken(data: Partial<Token>) {
    return await this.create(data);
  }

  public async updateToken(id: number, token: Partial<Token>) {
    return await this.repository.update(id,token)
  }

  public async deleteToken(id: number) {
    return await this.delete(id);
  }

  public async findById(id: number) {
    return await this.repository.findOneBy({
      id: id,
    });
  }

  public async findPendingTokens(userId:number){
    return await this.repository.find({where:{
      tokenTransactions:{
        status:TransactionStatus.PENDING,
        toUserId:userId  
      }
    }})
  }

  public async findTokensByUserId(userId: number) {
    return await this.repository.find({
      where:{
        user:{
          id:userId
        }
      },
      select:{
        createdAt:true,
        item:{product:{imgUrl:true,description:true,company:{ragsoc:true}}}
      }
    });
  }

  public async findTokenSerialMatch(userId:number, tokenId:number, serialCode:string){
    return await this.repository.findOneBy({
      id:tokenId,
      tokenTransactions:{
        status:TransactionStatus.PENDING,
        toUserId:userId
      },
      item:{
        serialCode:serialCode
      }  
    })
  }
}
