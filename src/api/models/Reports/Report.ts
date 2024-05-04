import { EntityBase } from "@base/infrastructure/abstracts/EntityBase";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne } from "typeorm";
import { User } from "../Users/User";

export enum Status{
    POSITIVE = 'Positive',
    NEGATIVE = 'Negative'
}

export enum Type{
    ONLINE = 'Online',
    FISICA = 'Fisica'
}

@Entity({name: 'reports'})
export class Report extends EntityBase{

    @Column({type: 'double precision'})
    lat: number

    @Column({type: 'double precision'})
    lon: number

    @Column()
    comune: string
    
    @CreateDateColumn({name: 'created_at'})
    createdAt: Date

    @Column()
    status: Status

    @Column()
    type: Type

    @ManyToOne(() => User, (user) => user.reports, {onDelete:'CASCADE'})
    @JoinColumn({name: 'user_id'})
    user: User
}