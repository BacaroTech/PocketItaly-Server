import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from 'typeorm';
  

import { EntityBase } from "@base/infrastructure/abstracts/EntityBase";

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

    @Column({name: 'create_date'})
    createDate: Date
}