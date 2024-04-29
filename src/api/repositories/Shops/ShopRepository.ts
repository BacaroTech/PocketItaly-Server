import { RepositoryBase } from '@base/infrastructure/abstracts/RepositoryBase';
import { Service } from 'typedi';
import { AppDataSource } from '@base/config/db';
import { Shop } from '@base/api/models/Shop/Shop';
import { ShopSchema } from '@base/api/schemas/Shops/ShopSchema';



@Service()
export class ShopRepository extends RepositoryBase<Shop> {

  constructor() {
    super(AppDataSource.getRepository(Shop));
  }

  public async createShop(data: ShopSchema) {
    
    let entity = new Shop();
    const metadata = {cap:data.cap,via:data.via,data}
    Object.assign(entity, {...data,metadata});

    return await this.repository.save(entity);
  }

  public async updateShop(shop: Shop, data: object) {
    Object.assign(shop, data);

    return await shop.save(data);
  }

  public async findById(id: number) {
    return await this.repository.findOneBy({
      id: id
    })
  }
}