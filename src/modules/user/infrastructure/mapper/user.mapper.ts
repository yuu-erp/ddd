import { Mapper } from "~/core/domain/repositories/mapper.port";
import { UserEntity } from "../../domain/entitys/user.entity";
import { UniqueEntityID } from "~/core/domain/entitys/unique-entity";
import { IUser, UserModel } from "../database/models/user.model";

export class UserMapper implements Mapper<UserEntity, IUser, unknown> {
  toPersistence(entity: UserEntity): IUser {
    const { name, age, email, password } = entity.getProps();
    return {
      _id: entity.id.toString(),
      name,
      age,
      email,
      password,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as IUser;
  }
  toDomain(record: IUser): UserEntity {
    return new UserEntity({
      id: new UniqueEntityID(record._id as string),
      props: record,
    });
  }
  toResponse(entity: UserEntity): unknown {
    const { name, age, email } = entity.getProps();
    return { name, age, email };
  }
}
