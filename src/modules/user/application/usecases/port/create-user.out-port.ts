import { UserEntity } from "~/modules/user/domain/entitys/user.entity";

export abstract class CreateUserOutPort {
    abstract insert(user: UserEntity): Promise<UserEntity | void>; // không quan tâm đây là database nào
}