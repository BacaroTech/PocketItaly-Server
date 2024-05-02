import { Item } from "@base/api/models/Products/Item";
import { ItemService } from "@base/api/services/Product/ItemService";
import { Body, Delete, Get, JsonController, Param, Post, Put } from "routing-controllers";
import { OpenAPI } from "routing-controllers-openapi";
import { Inject, Service } from "typedi";

@Service()
@OpenAPI({
  tags: ['Item'],
})
@JsonController('/item')
export class ProductController {

    @Inject()
    private itemService: ItemService

    @Get('/:code')
    public async findOneItemById(@Param('code') code: string){
        return await this.itemService.findOneItemBySerialCode(code)
    }


    @Post()
    public async insertItem(@Body() item: Item){
        return await this.itemService.insertItem(item)
    }

    @Put()
    public async updateItem(@Body() item: Item){
        return await this.itemService.updateItem(item)
    }

    @Delete('/:id')
    public async deleteItem(@Param('id') id: number){
        return await this.itemService.deleteItem(id)
    }
}