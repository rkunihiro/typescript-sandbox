import { BaseEntity, Entity, PrimaryColumn, Column } from "typeorm";
import { Field, ObjectType } from "type-graphql";

@Entity()
@ObjectType()
export class Test extends BaseEntity {
    @PrimaryColumn()
    @Field()
    public id: number = 0;

    @Column()
    @Field()
    public name: string = "";
}
