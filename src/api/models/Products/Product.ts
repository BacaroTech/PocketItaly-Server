import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany
} from 'typeorm';
  

import { EntityBase } from "@base/infrastructure/abstracts/EntityBase";
import { Item } from './Item';
import { Company } from '../Companies/Company';

@Entity({ name: 'products' })
export class Product extends EntityBase {
    @Column()
    name: string

    @Column({name: 'bar_code'})
    barCode: string

    @Column()
    description: string

    @Column({name: 'img_url'})
    imgUrl: string

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date

    @ManyToOne(() => Company, { onDelete: 'CASCADE' })
    @JoinColumn({name: 'company_id'})
    company: Company

    @OneToMany(() => Item, (item) => item.product)
    items: Item[]
}