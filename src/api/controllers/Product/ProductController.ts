import { Product } from "@base/api/models/Products/Product";
import { ProductService } from "@base/api/services/Auth/ProductService";
import { Body, Get, JsonController, Param, Post, Req } from "routing-controllers";
import { OpenAPI } from "routing-controllers-openapi";
import { Inject, Service } from "typedi";

@Service()
@OpenAPI({
  tags: ['Auth'],
})
@JsonController('/product')
export class ProductController {

    @Inject()
    private productService: ProductService

    @Get()
    public async findOneProductById(@Param('id') id: number){
        return await this.productService.findOneProductById(id)
    }

    @Post()
    public async insertProduct(@Body() product: Product){
        return await this.productService.insertProduct(product)
    }
}