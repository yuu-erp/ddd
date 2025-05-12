import { UserEntity } from "~/modules/user/domain/entitys/user.entity";
import {
    CreateUserCommand,
    CreateUserInPort,
} from "../port/create-user.in-port";
import { CreateUserOutPort } from "../port/create-user.out-port";

export class CreateUserInteractor implements CreateUserInPort {
  constructor(private readonly outPort: CreateUserOutPort) {}

  async execute(command: CreateUserCommand): Promise<UserEntity | void> {
    const user = UserEntity.create(command);
    return await this.outPort.insert(user);
  }
}
