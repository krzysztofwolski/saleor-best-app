import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Registration {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  domain!: string

  @Column()
  authToken!: string

}
