import { BaseEntity, Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class Test extends BaseEntity {
    @PrimaryColumn()
    public id: number = 0;

    @Column()
    public name: string = "";
}
