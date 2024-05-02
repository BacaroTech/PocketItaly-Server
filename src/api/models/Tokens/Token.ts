import {
  Entity,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  UpdateDateColumn,
  OneToOne,
} from "typeorm";
import { User } from "../Users/User";
import { TokenTransaction } from "./TokenTransaction";
import { EntityBase } from "@base/infrastructure/abstracts/EntityBase";
import { Company } from "../Companies/Company";
import { Item } from "../Products/Item";

@Entity("tokens")
export class Token extends EntityBase {

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp", nullable: true, name: "modified_at" })
  modifiedAt: Date;

  @Column({ type: "int", nullable: false, name: "belongs_to" })
  belongsTo: number;

  @Column({ type: "int", nullable: false, name: "issued_by_company" })
  issuedByCompany: number;

  @ManyToOne(() => User, (user) => user.tokens)
  @JoinColumn({ name: "belongs_to" })
  user: User;

  @OneToMany(() => TokenTransaction, (transaction) => transaction.token)
  tokenTransactions: TokenTransaction[];

  @ManyToOne(()=>Company,company=>company.tokens)
  company:Company

  @OneToOne(()=>Item)
  item:Item

  //    @ManyToOne(() => Company, company => company.tokens)
  //    @JoinColumn({ name: 'issuedByCompany' })
  //    company: Company;
}
