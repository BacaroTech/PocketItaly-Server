import { Item } from "@base/api/models/Products/Item";
import { ItemRepository } from "@base/api/repositories/Products/ItemRepository";
import { Inject, Service } from "typedi";

@Service()
export class ItemService{

    @Inject()
    private itemRepository: ItemRepository

    public async findOneItemBySerialCode(serialCode: string){
        return await this.itemRepository.findOneItemBySerialCode(serialCode)
    }

    public async insertItem(item: Item){
        return await this.itemRepository.insertItem(item)
    }

    public async updateItem(item: Item){
        return await this.itemRepository.updateItem(item.id, item)
    }

    public async deleteItem(id: number){
        return await this.itemRepository.deleteItem(id)
    }
}