import { Product } from "@base/api/models/Products/Product";
import { ProductRepository } from "@base/api/repositories/Users/ProductRepository";
import { Inject, Service } from "typedi";

@Service()
export class ProductService{

    @Inject()
    private productRepository: ProductRepository

    public async insertProduct(product: Product){
        return await this.productRepository.insertProduct(product)
    }

    public async updateproduct(product: Product){
        return await this.productRepository.updateProduct(product.id, product)
    }

    public async deleteproduct(id: number){
        return await this.productRepository.deleteProduct(id)
    }

    public async findOneProductById(id: number){
        return await this.productRepository.findById(id)
    }


}