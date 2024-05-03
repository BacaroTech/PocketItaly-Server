import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    UpdateDateColumn,
} from 'typeorm';
  

import { EntityBase } from "@base/infrastructure/abstracts/EntityBase";
import { Item } from './Item';
import { Company } from '../Companies/Company';

@Entity({ name: 'products' })
export class Product extends EntityBase {
    @Column({name: 'company_id'})
    companyId: string

    @Column({name: 'description'})
    description: string

    @Column({name: 'bar_code'})
    barCode: string

    @Column({name: 'img_url'})
    imgUrl: string
    
    @OneToMany(()=>Item,item=>item.product)
    items:Item[]

    @ManyToOne(()=>Company)
    @JoinColumn({name:"company_id"})
    company:Company

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date | null;

    @UpdateDateColumn({ type: 'timestamp', nullable: true, name: 'modified_at' })
    modifiedAt: Date | null;

}