import {
    Body,
    Get,
    JsonController,
    Param,
    Post,
  } from 'routing-controllers';
  import { Inject, Service } from 'typedi';
  import { ControllerBase } from '@base/infrastructure/abstracts/ControllerBase';
  import { OpenAPI, ResponseSchema } from 'routing-controllers-openapi';
import { CompanyService } from '@base/api/services/Company/CompanyService';
import { CompanySchema } from '@base/api/schemas/Companies/CompanySchema';



  
  @Service()
  @OpenAPI({
    tags: ['Company'],
  })
  @JsonController('/company')
  export class LoginController extends ControllerBase {
    
    @Inject()
    private companyService: CompanyService;

    public constructor() {
      super();
    }
  
    @Post()
    public async create(@Body() company: CompanySchema) {
      return await this.companyService.createCompany(company);
    }

    @Get("/:id")
    @ResponseSchema(CompanySchema)
    public async findById(@Param('id') companyId: number) {
      return await this.companyService.getCompany(companyId);
    }

  }