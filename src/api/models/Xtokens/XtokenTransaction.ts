import {
  Entity,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Xtoken } from "./Xtoken";
import { EntityBase } from "@base/infrastructure/abstracts/EntityBase";
import { User } from "../Users/User";
import { XtokenTransactionStatus } from "./XtokenTransactionStatus";

@Entity("xtoken_transactions")
export class XtokenTransaction extends EntityBase {
  @Column({ type: "int", nullable: true, name: "xtoken_id" })
  xtokenId: number;

  @Column({ type: "int", nullable: false, name: "from_user" })
  fromUserId: number;

  @Column({ type: "int", nullable: false, name: "to_user" })
  toUserId: number;

  @CreateDateColumn({ nullable: true, name: "created_at" })
  createdAt: Date;

  @Column({
    type: "double precision",
  })
  latitude: number;

  @Column({
    type: "double precision",
  })
  longitude: number;

  @ManyToOne(() => Xtoken)
  @JoinColumn({ name: "xtoken_id" })
  xtoken: Xtoken;

  @ManyToOne(() => User)
  @JoinColumn({ name: "from_user" })
  fromUser: User;

  @ManyToOne(() => User)
  @JoinColumn({ name: "to_user" })
  toUser: User;

  @OneToMany(() => XtokenTransactionStatus,xtokenTransactionStatus=> xtokenTransactionStatus.transaction)
  statuses: XtokenTransactionStatus[];
}
