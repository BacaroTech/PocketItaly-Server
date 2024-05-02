import {
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
  

import { EntityBase } from "@base/infrastructure/abstracts/EntityBase";
import { Item } from './Item';

@Entity({ name: 'products' })
export class Product extends EntityBase {
    @Column({name: 'producer_id'})
    producerId: string

    @Column({name: 'piva_company'})
    pivaCompany: string

    @Column()
    name: string

    @Column({name: 'bar_code'})
    barCode: string

    @Column()
    description: string

    @Column({name: 'img_url'})
    imgUrl: string

    @Column({name: 'created_at'})
    createAt: Date

    @OneToMany(() => Item, (item) => item.product)
    items: Item[]
}