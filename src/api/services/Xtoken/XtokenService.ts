import { Xtoken } from "@base/api/models/Xtokens/Xtoken";
import { XtokenRepository } from "@base/api/repositories/Xtokens/XtokenRepository";
import { Inject, Service } from "typedi";

@Service()
export class XtokenService {
  @Inject()
  private xtokenRepository: XtokenRepository;

  public async insertXtoken(xtoken: Xtoken) {
    return await this.xtokenRepository.insertXtoken(xtoken);
  }

  public async updateXtoken(xtoken: Xtoken) {
    return await this.xtokenRepository.updateXtoken(xtoken.id, xtoken);
  }

  public async deleteXtoken(id: number) {
    return await this.xtokenRepository.deleteXtoken(id);
  }

  public async findOneXtokenById(id: number) {
    return await this.xtokenRepository.findById(id);
  }
}
