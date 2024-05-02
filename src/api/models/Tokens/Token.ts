import {
  Entity,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  UpdateDateColumn,
} from "typeorm";
import { User } from "../Users/User";
import { TokenTransaction } from "./TokenTransaction";
import { EntityBase } from "@base/infrastructure/abstracts/EntityBase";
import { Company } from "../Companies/Company";

@Entity("tokens")
export class Token extends EntityBase {
  @Column({ type: "int", nullable: false, name: "item_id" })
  itemId: number;

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

  //    @ManyToOne(() => Company, company => company.tokens)
  //    @JoinColumn({ name: 'issuedByCompany' })
  //    company: Company;
}
