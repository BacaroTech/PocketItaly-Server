import { CompanyRepository } from "@base/api/repositories/Companies/CompanyRepository";
import { CompanySchema } from "@base/api/schemas/Companies/CompanySchema";

import { Inject, Service } from "typedi";

@Service()
export class CompanyService {
  @Inject()
  private companyRepository: CompanyRepository;

  public async createCompany(company: CompanySchema) {
    return await this.companyRepository.createCompany(company)
  }

  public async getCompany(companyId: number) {
    return await this.companyRepository.findById(companyId)
  }

}