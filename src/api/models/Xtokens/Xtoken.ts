import {
  Entity,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { User } from "../Users/User";
import { XtokenTransaction } from "./XtokenTransaction";
import { EntityBase } from "@base/infrastructure/abstracts/EntityBase";
import { Company } from "../Companies/Company";

@Entity("xtokens")
export class Xtoken extends EntityBase {
  @Column({ type: "int", nullable: false, name: "item_id" })
  itemId: number;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @Column({ type: "timestamp", nullable: true, name: "modified_at" })
  modifiedAt: Date;

  @Column({ type: "int", nullable: false, name: "belongs_to" })
  belongsTo: number;

  @Column({ type: "int", nullable: false, name: "issued_by_company" })
  issuedByCompany: number;

  @ManyToOne(() => User, (user) => user.xtokens)
  @JoinColumn({ name: "belongs_to" })
  user: User;

  @OneToMany(() => XtokenTransaction, (transaction) => transaction.xtoken)
  xtoken_transactions: XtokenTransaction[];

  @ManyToOne(()=>Company,company=>company.xtokens)
  company:Company

  //    @ManyToOne(() => Company, company => company.tokens)
  //    @JoinColumn({ name: 'issuedByCompany' })
  //    company: Company;
}
