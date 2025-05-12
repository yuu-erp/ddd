import { UserEntity } from "../entitys/user.entity";
import { RepositoryPort } from "src/core/domain/repositories/repository.port";

export interface IUserRepository extends RepositoryPort<UserEntity> {
}
