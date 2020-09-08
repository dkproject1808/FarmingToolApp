import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";

@Entity('driver')
export class Driver {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    firstname!: string;

    @Column()
    lastname!: string;
}

export default Driver;