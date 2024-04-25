import { Item } from "@base/api/models/Products/Item";
import { AppDataSource } from "@base/config/db";
import { RepositoryBase } from "@base/infrastructure/abstracts/RepositoryBase";
import { Service } from "typedi";

@Service()
export class ItemRepository extends RepositoryBase<Item>{
    constructor() {
        super(AppDataSource.getRepository(Item));
    }

    public async findOneItemBySerialCode(serialCode: string){
        return await this.repository.findBy({serialCode})
    }

    public async insertItem(item: Item){
        return await this.create(item)
    }

    public async updateItem(id: number, item: Item){
        return await this.update(id, item)
    }

    public async deleteItem(id: number){
        return await this.delete(id)
    }
}