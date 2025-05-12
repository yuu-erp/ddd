import { UserEntity } from "../../domain/entitys/user.entity";
import { CreateUserCommand, CreateUserInPort } from "../usecases/port/create-user.in-port";

export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserInPort,
) {}

  async createUser(command: CreateUserCommand): Promise<UserEntity> {
    const user = await this.createUserUseCase.execute(command);
    return user;
  }
}
