
import { Company } from "@base/api/models/Companies/Company";
import { CompanyRepository } from "@base/api/repositories/Companies/CompanyRepository";
import { Inject, Service } from "typedi";

@Service()
export class CompanyService {
  @Inject()
  private companyRepository: CompanyRepository;

}