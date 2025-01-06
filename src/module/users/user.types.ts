import { InferSchemaType } from "mongoose";
import { userSchema } from "./user.model";
import { Expand } from "@/lib/types/mics";

export type User = Expand<InferSchemaType<typeof userSchema>>;

export type UserCreate = Pick<User, "name" | "email" | "preferences">;
