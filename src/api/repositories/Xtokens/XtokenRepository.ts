import { RepositoryBase } from "@base/infrastructure/abstracts/RepositoryBase";
import { Service } from "typedi";
import { AppDataSource } from "@base/config/db";
import { Xtoken } from "@base/api/models/Xtokens/Xtoken";

@Service()
export class XtokenRepository extends RepositoryBase<Xtoken> {
  constructor() {
    super(AppDataSource.getRepository(Xtoken));
  }

  public async insertXtoken(data: object) {
    return await this.create(data);
  }

  public async updateXtoken(id: number, xtoken: Xtoken) {
    return await this.update(id, xtoken);
  }

  public async deleteXtoken(id: number) {
    return await this.delete(id);
  }

  public async findById(id: number) {
    return await this.repository.findOneBy({
      id: id,
    });
  }
}
