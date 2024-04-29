import { ShopRepository } from "@base/api/repositories/Shops/ShopRepository";
import { ShopSchema } from "@base/api/schemas/Shops/ShopSchema";
import { Inject, Service } from "typedi";

@Service()
export class ShopService {
  @Inject()
  private shopRepository: ShopRepository;


  public async createShop(shop: ShopSchema) {
    return await this.shopRepository.createShop(shop)
  }

  public async getShop(shopId: number) {
    return await this.shopRepository.findById(shopId)
  }

}