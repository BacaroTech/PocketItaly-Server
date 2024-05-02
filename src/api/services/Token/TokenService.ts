import { Token } from "@base/api/models/Tokens/Token";
import { TokenRepository } from "@base/api/repositories/Tokens/TokenRepository";
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

  public async findTokenByUserId(userId: number) {
    return await this.tokenRepository.findTokenByUserId(userId);
  }
}
