import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  name: string;

  @Column({
    nullable: false,
    unique: true,
  })
  email: string;

  @Column({
    nullable: false,
  })
  password: string;

  @Column({
    nullable: false,
  })
  phone: string;

  @Column({
    type: 'varchar',
    nullable: true,
    unique: true,
  })
  cpf: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    unique: true,
  })
  cnpj: string | null;
}
