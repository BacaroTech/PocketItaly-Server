import { RepositoryBase } from "@base/infrastructure/abstracts/RepositoryBase";
import { Service } from "typedi";
import { AppDataSource } from "@base/config/db";
import { Token } from "@base/api/models/Tokens/Token";

@Service()
export class TokenRepository extends RepositoryBase<Token> {
  constructor() {
    super(AppDataSource.getRepository(Token));
  }

  public async insertToken(data: object) {
    return await this.create(data);
  }

  public async updateToken(id: number, token: Token) {
    return await this.update(id, token);
  }

  public async deleteToken(id: number) {
    return await this.delete(id);
  }

  public async findById(id: number) {
    return await this.repository.findOneBy({
      id: id,
    });
  }

  public async findTokenByUserId(userId: number) {
    return await this.repository.find({
      where:{
        user:{
          id:userId
        }
      }
    });
  }
}
