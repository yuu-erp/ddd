import { UserController } from "../../application/controllers/user.controller";
import { CreateUserInteractor } from "../../application/usecases/interactor/create-user.interactor";
import { UserRepository } from "../database/repositories/user.repository";
import { UserMapper } from "../mapper/user.mapper";

const mapper = new UserMapper();
const repository = new UserRepository(mapper);
const createUserUseCase = new CreateUserInteractor(repository);
const controller = new UserController(createUserUseCase);

const router = Router();
router.post("/users", controller.createUser);

export default router;
