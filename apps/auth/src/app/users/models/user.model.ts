import { AbstractModel } from "@grpc/nestjs";
import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType()
export class User extends AbstractModel {
  @Field(() => String)
  email: string;
}