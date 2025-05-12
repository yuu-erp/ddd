import { UserCase } from "~/core/domain/repositories/use-case.base";
import { UserEntity } from "~/modules/user/domain/entitys/user.entity";
import { CreateUserProps } from "~/modules/user/domain/user.type";

export interface CreateUserCommand extends CreateUserProps {}

export abstract class CreateUserInPort
  implements UserCase<CreateUserCommand, UserEntity>
{
  abstract execute(command: CreateUserCommand): Promise<UserEntity | void>;
}