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
import { ShopService } from '@base/api/services/Shop/ShopService';
import { ShopSchema } from '@base/api/schemas/Shops/ShopSchema';



@Service()
@OpenAPI({
  tags: ['Shop'],
})
@JsonController('/shop')
export class LoginController extends ControllerBase {
  
  @Inject()
  private shopService: ShopService;

  public constructor() {
    super();
  }

  @Post()
  public async create(@Body() shop: ShopSchema) {
    return await this.shopService.createShop(shop);
  }

  @Get("/:id")
  @ResponseSchema(ShopSchema)
  public async findById(@Param('id') shopId: number) {
    return await this.shopService.getShop(shopId);
  }

}