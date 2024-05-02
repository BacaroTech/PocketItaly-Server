import {
    Column,
    Entity,
    JoinColumn,
    OneToMany,
} from 'typeorm';
  

import { EntityBase } from "@base/infrastructure/abstracts/EntityBase";
import { Item } from './Item';

@Entity({ name: 'products' })
export class Product extends EntityBase {
    @Column({name: 'company_id'})
    companyId: string

    @Column({name: 'bar_code'})
    barCode: string

    @Column({name: 'img_url'})
    imgUrl: string

    @Column({name: 'create_date'})
    createDate: Date
    
    @OneToMany(()=>Item,item=>item.product)
    items:Item[]

}