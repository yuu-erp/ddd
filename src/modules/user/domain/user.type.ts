import { MarkOptional } from "ts-essentials";

export interface UserProps {
  name: string;
  age: number;
  email: string;
  password: string;
}

export interface CreateUserProps
  extends MarkOptional<UserProps, "name" | "age"> {}

export interface UserModel extends UserProps {}
