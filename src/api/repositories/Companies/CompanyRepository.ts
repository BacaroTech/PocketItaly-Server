import { RepositoryBase } from '@base/infrastructure/abstracts/RepositoryBase';
import { Service } from 'typedi';
import { AppDataSource } from '@base/config/db';
import { Company } from '@base/api/models/Companies/Company';

@Service()
export class CompanyRepository extends RepositoryBase<Company> {

  constructor() {
    super(AppDataSource.getRepository(Company));
  }

  public async createCompany(data: object) {
    let entity = new Company();

    Object.assign(entity, data);

    return await this.repository.save(entity);
  }

  public async updateCompany(company: Company, data: object) {
    Object.assign(company, data);

    return await company.save(data);
  }

  public async findById(id: number) {
    return await this.repository.findOneBy({
      id: id
    })
  }
}