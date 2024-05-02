import {
  Entity,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  UpdateDateColumn,
} from "typeorm";
import { Token } from "./Token";
import { EntityBase } from "@base/infrastructure/abstracts/EntityBase";
import { User } from "../Users/User";
import { TokenTransactionStatus } from "./TokenTransactionStatus";

@Entity("token_transactions")
export class TokenTransaction extends EntityBase {
  @Column({ type: "int", nullable: true, name: "token_id" })
  tokenId: number;

  @Column({ type: "int", nullable: false, name: "from_user" })
  fromUserId: number;

  @Column({ type: "int", nullable: false, name: "to_user" })
  toUserId: number;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp", nullable: true, name: "modified_at" })
  modifiedAt: Date;

  @Column({
    type: "double precision",
  })
  latitude: number;

  @Column({
    type: "double precision",
  })
  longitude: number;

  @ManyToOne(() => Token)
  @JoinColumn({ name: "token_id" })
  token: Token;

  @ManyToOne(() => User)
  @JoinColumn({ name: "from_user" })
  fromUser: User;

  @ManyToOne(() => User)
  @JoinColumn({ name: "to_user" })
  toUser: User;

  @OneToMany(() => TokenTransactionStatus,tokenTransactionStatus=> tokenTransactionStatus.transaction)
  statuses: TokenTransactionStatus[];
}
