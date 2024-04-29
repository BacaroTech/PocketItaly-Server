import { ShopRepository } from "@base/api/repositories/Shops/ShopRepository";
import { Inject, Service } from "typedi";

@Service()
export class ShopService {
  @Inject()
  private shopRepository: ShopRepository;
}