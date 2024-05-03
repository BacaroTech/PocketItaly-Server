import { TokenRepository } from "@base/api/repositories/Tokens/TokenRepository";
import { UserRepository } from "@base/api/repositories/Users/UserRepository";
import { Inject, Service, Token } from "typedi";
import { TokenService } from "../Token/TokenService";

@Service()
export class UserService {
  @Inject()
  private tokenService: TokenService;
  
  public async getUserWardrobe(userId:number){
    return await this.tokenService.findTokensByUserId(userId)
  
  }
}