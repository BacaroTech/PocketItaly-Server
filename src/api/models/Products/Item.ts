import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, Unique, UpdateDateColumn } from "typeorm";
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

    //column for the link to the token
    @OneToOne(() => Token,token=>token.itemId)
    token: Token

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date | null;

    @UpdateDateColumn({ type: 'timestamp', nullable: true, name: 'modified_at' })
    modifiedAt: Date | null;
}