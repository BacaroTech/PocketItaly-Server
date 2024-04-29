import { EntityBase } from '@base/infrastructure/abstracts/EntityBase';
import { Entity,  Column, CreateDateColumn, UpdateDateColumn, BaseEntity, OneToMany } from 'typeorm';
import { Xtoken } from '../Xtokens/Xtoken';

@Entity('companies')
export class Company extends EntityBase {

    @Column({ type: 'varchar', nullable: true, name: 'ragsoc' })
    ragsoc: string | null;

    @Column({ type: 'varchar', nullable: true, name: 'piva' })
    piva: string | null;

    @Column({ type: 'json', nullable: true, name: 'indirizzo' })
    indirizzo: any | null;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date | null;

    @UpdateDateColumn({ type: 'timestamp', nullable: true, name: 'modified_at' })
    modifiedAt: Date | null;

    @OneToMany(()=>Xtoken,xtoken=>xtoken.company)
    xtokens:Xtoken[]
}