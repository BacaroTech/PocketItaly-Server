import { RepositoryBase } from '@base/infrastructure/abstracts/RepositoryBase';
import { Service } from 'typedi';
import { AppDataSource } from '@base/config/db';
import { Company } from '@base/api/models/Companies/Company';
import { CompanySchema } from '@base/api/schemas/Companies/CompanySchema';
import { AppFile } from '@base/api/interfaces/AppFileInterface';
import { CompanyNotFoundException } from '@base/api/exceptions/Companies/CompanyNotFoundException';
import { randomUUID } from 'crypto';


@Service()
export class CompanyRepository extends RepositoryBase<Company> {

  constructor() {
    super(AppDataSource.getRepository(Company));
  }

  public async createCompany(data: CompanySchema) {
    let entity = new Company();
    const metadata = {cap:data.cap,via:data.via,data}

    Object.assign(entity, {...data,metadata});

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

  public async addFile(companyId:number,appFile:AppFile){
    const company =  await this.repository.findOneBy({
      id:companyId
    })

    if (!company){
      throw new CompanyNotFoundException()
    }

    appFile.id = randomUUID()
  
    company.media.push(appFile)
    return await company.save()
  }

  public async deleteFile(companyId:number,fileId:string){
        const company =  await this.repository.findOneBy({
      id:companyId
    })
    
    if (!company){
      throw new CompanyNotFoundException()
    }
  
    company.media.filter(el=>el.id!==fileId)
    return await company.save()
  }
}