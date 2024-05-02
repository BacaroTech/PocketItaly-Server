import { EntityBase } from "@base/infrastructure/abstracts/EntityBase";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne } from "typeorm";
import { User } from "../Users/User";

export enum Type{
    POSITIVE = 'Positive',
    NEGATIVE = 'Negative'
}

@Entity({name: 'reports'})
export class Report extends EntityBase{

    @Column({type: 'double precision'})
    lat: number

    @Column({type: 'double precision'})
    lon: number

    @Column()
    comune: string
    
    @Column()
    date: Date

    @Column()
    type: Type

    @ManyToOne(() => User, (user) => user.reports, {onDelete:'CASCADE'})
    @JoinColumn({name: 'user_id'})
    user: User
}