import { Product } from "@base/api/models/Products/Product";
import { ProductRepository } from "@base/api/repositories/Products/ProductRepository";
import { Inject, Service } from "typedi";

@Service()
export class ProductService{

    @Inject()
    private productRepository: ProductRepository

    public async insertProduct(product: Product){
        return await this.productRepository.insertProduct(product)
    }

    public async updateProduct(product: Product){
        return await this.productRepository.updateProduct(product.id, product)
    }

    public async deleteProduct(id: number){
        return await this.productRepository.deleteProduct(id)
    }

    public async findOneProductById(id: number){
        return await this.productRepository.findOneProduct(id)
    }

    public async findAll(){
        return await this.productRepository.findAll()
    }

    public async insertManyProducts(products: Product[]){
        return await this.productRepository.insertManyProducts(products)
    }


}