import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";

@Entity('driver')
export class Driver {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column('text',{nullable:true})
    firstname!: string;

    @Column('text',{nullable:true})
    lastname!: string;
}

export default Driver;