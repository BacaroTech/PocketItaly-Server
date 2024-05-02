import { Entity,  Column, CreateDateColumn, ManyToOne, JoinColumn, UpdateDateColumn } from 'typeorm';
import { TokenTransaction } from './TokenTransaction'; // Assuming you have this entity defined
import { EntityBase } from '@base/infrastructure/abstracts/EntityBase';

export enum TransactionStatus {
    PENDING = "PENDING",
    VERIFIED = "VERIFIED",
    INVALID = "INVALID",
    REPORTED = "REPORTED",
    CANCELLED = "CANCELLED"
}

@Entity('token_transaction_statuses')
export class TokenTransactionStatus extends EntityBase {

    @Column({
        type: "enum",
        enum: TransactionStatus,
    })
    status: TransactionStatus;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp", nullable: true, name: "modified_at" })
    modifiedAt: Date;

    @Column({ type: 'json', nullable: true})
    metadata: object;

    @Column({ nullable: true,name:"transaction_id" })
    transactionId: number;

    @ManyToOne(() => TokenTransaction, transaction => transaction.statuses)
    @JoinColumn({ name: 'transaction_id' })
    transaction: TokenTransaction;
}
