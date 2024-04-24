import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { XtokenTransaction } from './XtokenTransaction'; // Assuming you have this entity defined

export enum TransactionStatus {
    SENT = "SENT",
    RECEIVED = "RECEIVED",
    VERIFIED = "VERIFIED",
    INVALID = "INVALID",
    SIGNAL = "SIGNAL",
    CANCELLED = "CANCELLED"
}

@Entity('xtoken_transaction_statuses')
export class XtokenTransactionStatus {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "enum",
        enum: TransactionStatus,
    })
    status: TransactionStatus;

    @CreateDateColumn({ type: 'timestamp', nullable: true,name:"created_at" })
    createdAt: Date;

    @Column({ type: 'json', nullable: true})
    metadata: object;

    @Column({ nullable: true,name:"transaction_id" })
    transactionId: number;

    @ManyToOne(() => XtokenTransaction, transaction => transaction.statuses)
    @JoinColumn({ name: 'transaction_id' })
    transaction: XtokenTransaction;
}
