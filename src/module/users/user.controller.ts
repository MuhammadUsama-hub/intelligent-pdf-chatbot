import { Request, Response } from "express";
import UserService from "./user.service";
import { statusConst } from "@/lib/utils/status";

export const create = async (req: Request, res: Response) => {
  const user = await UserService.create(req.body);

  res.status(statusConst.created.code).json({ data: user });
};

const UserController = {
  create,
};
export default UserController;
