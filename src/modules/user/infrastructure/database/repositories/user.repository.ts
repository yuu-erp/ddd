import { MongoDBRepositoryBase } from "~/core/infrastructure/persistence/repository.mongodb.base";
import { UserEntity } from "~/modules/user/domain/entitys/user.entity";
import { IUserRepository } from "~/modules/user/domain/repositories/user.repository";
import { UserMapper } from "../../mapper/user.mapper";
import { IUser, UserModel } from "../models/user.model";

export class UserRepository
  extends MongoDBRepositoryBase<UserEntity, IUser>
  implements IUserRepository
{
  protected model = UserModel;
  constructor(userMapper: UserMapper) {
    super(userMapper);
  }
}
