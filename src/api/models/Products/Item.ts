import { Column, Entity, JoinColumn, ManyToOne, OneToOne, Unique } from "typeorm";
import { Product } from "./Product";
import { EntityBase } from "@base/infrastructure/abstracts/EntityBase";
import { Token } from "../Tokens/Token";


@Entity({name: 'items'})
@Unique(['serialCode'])
export class Item extends EntityBase{

    @Column({name: 'serial_code'})
    serialCode: string

    @Column({name: 'product_id'})
    productId: number

    @ManyToOne(() => Product, { onDelete: 'CASCADE' })
    @JoinColumn({name: 'product_id'})
    product: Product

    @Column({name: "join_id"})
    joinId: string

    //column for the link to the token
    @OneToOne(() => Token)
    @JoinColumn({name: 'join_id'})
    token: Token
}