import { UserEntity } from "./modules/user/domain/entitys/user.entity";

console.log("NODEJS");

(() => {
  try {
    const userEntity = UserEntity.create({
      email: "a@gmail.com",
      password: "123",
      name: "Nguyễn Văn A",
      age: 25,
    });
    console.log("userEntity", userEntity.getProps());
    console.log("userEntity id", userEntity.id.toString());
  } catch (error) {
    console.log(error);
  }
})();
