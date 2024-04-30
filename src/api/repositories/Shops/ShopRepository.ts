import { RepositoryBase } from '@base/infrastructure/abstracts/RepositoryBase';
import { Service } from 'typedi';
import { AppDataSource } from '@base/config/db';
import { Shop } from '@base/api/models/Shop/Shop';
import { ShopSchema } from '@base/api/schemas/Shops/ShopSchema';
import { ShopNotFoundException } from '@base/api/exceptions/Shop/ShopNotFoundException';
import { AppFile } from '@base/api/interfaces/AppFileInterface';
import { randomUUID } from 'crypto';



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
  
  public async addFile(shopId:number,appFile:AppFile){
    const shop =  await this.repository.findOneBy({
      id:shopId
    })

    if (!shop){
      throw new ShopNotFoundException()
    }

    appFile.id = randomUUID()
  
    shop.media.push(appFile)
    return await shop.save()
  }

  public async deleteFile(shopId:number,fileId:string){
        const shop =  await this.repository.findOneBy({
      id:shopId
    })
    
    if (!shop){
      throw new ShopNotFoundException()
    }
  
    shop.media.filter(el=>el.id!==fileId)
    return await shop.save()
  }
}