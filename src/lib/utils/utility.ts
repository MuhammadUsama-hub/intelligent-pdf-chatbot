import { AuthUser } from "#/auth/auth.types";
export const getReqUser = (res: any) => {
  return res.locals.user as AuthUser;
};
