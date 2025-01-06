import User from "#/users/user.model";
import { UserCreate } from "./user.types";
const create = async (data: UserCreate) => {
  const user = await User.create(data);
  return user;
};

const UserService = {
  create,
};

export default UserService;
