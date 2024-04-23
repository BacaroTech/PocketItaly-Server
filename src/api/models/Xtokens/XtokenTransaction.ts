import {
  Entity,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Xtoken } from "./Xtoken";
import { EntityBase } from "@base/infrastructure/abstracts/EntityBase";
import { User } from "../Users/User";

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

  @ManyToOne(() => Xtoken)
  @JoinColumn({ name: "xtoken_id" })
  xtoken: Xtoken;

  @ManyToOne(() => User)
  @JoinColumn({ name: "from_user" })
  fromUser: User;

  @ManyToOne(() => User)
  @JoinColumn({ name: "to_user" })
  toUser: User;
}
