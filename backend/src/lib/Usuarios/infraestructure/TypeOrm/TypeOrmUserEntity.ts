import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuarios')
export class TypeOrmUserEntity{
    @PrimaryGeneratedColumn()
    id:string

    @Column()
    name:string

    @Column()
    email:string

    @Column()
    password:string

    @Column()
    fec_nac:Date

}

