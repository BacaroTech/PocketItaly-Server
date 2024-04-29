import { EntityBase } from '@base/infrastructure/abstracts/EntityBase';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export enum OwnerType {
    COMPANY = "COMPANY",
    SHOP = "SHOP",
    USER = "USER"
}

@Entity('company_files')
export class CompanyFile extends EntityBase {

    @Column({ type: 'varchar', nullable: true })
    name: string | null;

    @Column({ type: 'varchar' })
    url: string | null;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;
  
    @UpdateDateColumn({ type: "timestamp", nullable: true, name: "modified_at" })
    modifiedAt: Date;

    @Column({
        type: 'enum',
        enum: OwnerType,
        nullable: true
    })
    owner_type: OwnerType | null;

}
