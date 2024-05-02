import { EntityBase } from '@base/infrastructure/abstracts/EntityBase';
import { Entity,  Column, CreateDateColumn, UpdateDateColumn, BaseEntity, OneToMany, JoinColumn } from 'typeorm';
import { Xtoken } from '../Xtokens/Xtoken';
import { AppFile } from '@base/api/interfaces/AppFileInterface';
import { Product } from '../Products/Product';

@Entity('companies')
export class Company extends EntityBase {

    @Column({ type: 'varchar', nullable: true, name: 'ragsoc' })
    ragsoc: string | null;

    @Column({ type: 'varchar', nullable: true, name: 'piva' })
    piva: string | null;

    @Column({ type: 'json', nullable: true, name: 'indirizzo' })
    indirizzo: any | null;

    @Column({ type: 'json',nullable: true, })
    media: AppFile[];

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date | null;

    @UpdateDateColumn({ type: 'timestamp', nullable: true, name: 'modified_at' })
    modifiedAt: Date | null;

    @OneToMany(()=>Xtoken,xtoken=>xtoken.company)
    xtokens:Xtoken[]

    @OneToMany(()=>Product,product=>product.companyId)
    products:Product[]
}