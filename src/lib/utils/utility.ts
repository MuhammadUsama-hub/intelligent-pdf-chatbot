import { AuthUser } from "#/auth/auth.types";
import pdfParser from "pdf-parse";

export const getReqUser = (res: any) => {
  return res.locals.user as AuthUser;
};

export const getText = async (file: Base64URLString) => {
  const pdfBuffer = Buffer.from(file, "base64");
  const data = await pdfParser(pdfBuffer);
  return data.text;
};
