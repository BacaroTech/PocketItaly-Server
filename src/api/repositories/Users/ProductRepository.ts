import { Product } from "@api/models/Products/Product";
import { AppDataSource } from "@base/config/db";
import { RepositoryBase } from "@base/infrastructure/abstracts/RepositoryBase";
import { Service } from "typedi";

@Service()
export class ProductRepository extends RepositoryBase<Product>{
    constructor() {
        super(AppDataSource.getRepository(Product));
    }

    public async insertProduct(data: object) {
        return await this.create(data);
    }

    public async updateProduct(id: number, product: Product) {
        return await this.update(id, product);
    }

    public async deleteProduct(id: number) {
        return await this.delete(id);
    }

    public async findOneProduct(id: number) {
        return await this.findById(id)
    }

    public async findAllProducts(){
        return await this.findAll()
    }

    public async insertManyProducts(products: Product[]){
        return await this.repository.insert(products)
    }

}