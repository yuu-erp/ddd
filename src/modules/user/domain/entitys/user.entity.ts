import { AggregateRoot } from "~/core/domain/entitys/aggregate.base";
import { CreateUserProps, UserProps } from "../user.type";
import { UniqueEntityID } from "~/core/domain/entitys/unique-entity";

export class UserEntity extends AggregateRoot<UserProps> {
  static create(createUserProps: CreateUserProps): UserEntity {
    const id = new UniqueEntityID();
    const props: UserProps = {
      ...createUserProps,
      name: createUserProps.name || "",
      age: createUserProps.age || 0,
    };
    const userEntity = new UserEntity({ id, props: props });

    return userEntity;
  }
  validate(): void {
    const { name, age, email, password } = this.getProps();
    if (!email) throw Error("Email là bắt buộc");
    if (!password) throw Error("Password là bắt buộc");
    if (typeof name !== "string") throw Error("Name phải là string");
  }
}
