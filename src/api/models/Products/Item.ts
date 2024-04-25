import { Column, Entity, JoinColumn, ManyToOne, Unique } from "typeorm";
import { Product } from "./Product";
import { EntityBase } from "@base/infrastructure/abstracts/EntityBase";

@Entity({name: 'items'})
@Unique(['serialCode'])
export class Item extends EntityBase{

    @Column({name: 'serial_code'})
    serialCode: string

    @Column({name: 'product_id'})
    productId: number

    @ManyToOne(() => Product)
    @JoinColumn({name: 'product_id'})
    product: Product

    //@Column({name: token_id})
    //tokenId: string

    //column for the link to the token
    //@OneToOne(() => Token)
    //@JoinColumn({name: 'token_id'})
    //token: Token
}