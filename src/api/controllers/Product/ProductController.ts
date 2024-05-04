import { Product } from "@base/api/models/Products/Product";
import { ProductService } from "@base/api/services/Product/ProductService";
import { Body, Delete, Get, JsonController, Param, Post, Put } from "routing-controllers";
import { OpenAPI, ResponseSchema } from "routing-controllers-openapi";
import { Inject, Service } from "typedi";

@Service()
@OpenAPI({
  tags: ['Product'],
})
@JsonController('/product')
export class ProductController {

    @Inject()
    private productService: ProductService

    @Get()
    public async findAllProducts(){
        return await this.productService.findAll()
    }

    @Get('/:id')
    public async findOneProductById(@Param('id') id: number){
        return await this.productService.findOneProductById(id)
    }

    @Post()
    public async insertProduct(@Body() product: Product){
        return await this.productService.insertProduct(product)
    }

    @Post('/insertManyProducts')
    public async insertManyProducts(@Body() products: Product[]){
        return await this.productService.insertManyProducts(products)
    }

    @Put()
    public async updateProduct(@Body() product: Product){
        return await this.productService.updateProduct(product)
    }

    @Delete('/:id')
    public async deleteOneProduct(@Param('id') id: number){
        return await this.productService.deleteProduct(id)
    }
}