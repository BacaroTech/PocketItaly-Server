import { EntityBase } from '@base/infrastructure/abstracts/EntityBase';
import { Entity,  Column, CreateDateColumn, UpdateDateColumn, BaseEntity } from 'typeorm';

@Entity('shops')
export class Shop extends EntityBase {

    @Column({ type: 'varchar', nullable: true, name: 'ragsoc' })
    ragsoc: string | null;

    @Column({ type: 'varchar', nullable: true, name: 'piva' })
    piva: string | null;

    @Column({ type: 'json', nullable: true, name: 'indirizzo' })
    indirizzo: any | null;
    
    @Column({ type: 'varchar', nullable: true, name: 'latitude' })
    latitude: any | null;

    @Column({ type: 'varchar', nullable: true, name: 'longitude' })
    longitude: any | null;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date | null;

    @UpdateDateColumn({ type: 'timestamp', nullable: true, name: 'modified_at' })
    modifiedAt: Date | null;
}