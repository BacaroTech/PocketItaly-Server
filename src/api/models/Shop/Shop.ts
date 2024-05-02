import { AppFile } from '@base/api/interfaces/AppFileInterface';
import { EntityBase } from '@base/infrastructure/abstracts/EntityBase';
import { Entity,  Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('shops')
export class Shop extends EntityBase {

    @Column({ type: 'varchar', nullable: true, name: 'ragsoc' })
    ragsoc: string | null;

    @Column({ type: 'varchar', nullable: true, name: 'piva' })
    piva: string | null;

    @Column({ type: 'json', nullable: true, name: 'indirizzo' })
    indirizzo: any | null;//TODO typizzare indirizzo
    
    @Column({ type: 'varchar', nullable: true, name: 'latitude' })
    latitude: any | null;

    @Column({ type: 'varchar', nullable: true, name: 'longitude' })
    longitude: any | null;

    @Column({ type: 'json',nullable: true })
    media: AppFile[];

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date | null;

    @UpdateDateColumn({ type: 'timestamp', nullable: true, name: 'modified_at' })
    modifiedAt: Date | null;
}