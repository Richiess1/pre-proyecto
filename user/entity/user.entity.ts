import { Column, Entity,OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Book } from "../../book/entity/book.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    email:string

    @Column()
    name: string

    @Column()
    password: string

    @OneToMany(() => Book, (book) => book.user)
    books: Book[];
}
