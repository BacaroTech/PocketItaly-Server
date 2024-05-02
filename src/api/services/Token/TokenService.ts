import { Token } from "@base/api/models/Tokens/Token";
import { User } from "@base/api/models/Users/User";
import { TokenRepository } from "@base/api/repositories/Tokens/TokenRepository";
import { ValidateTokenBody } from "@base/api/schemas/Token/FlussoTokenSchema";
import { Inject, Service } from "typedi";

@Service()
export class TokenService {
  @Inject()
  private tokenRepository: TokenRepository;

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

  public async findTokenByUserId(user: User) {
    return await this.tokenRepository.findTokenByUserId(user.id);
  }

  public async findPendingTokens(user:User){
    return this.tokenRepository.findPendingTokens(user.id)
  }

  public async validateToken(user:User,data:ValidateTokenBody ){
    const token = await this.tokenRepository.findTokenSerialMatch(user.id,data.tokenId,data.serialCode)
    if (token) return true  
    return false
  }

}
