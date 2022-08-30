import jwt from "jsonwebtoken";
import { User } from "../interfaces/controllers";

export const generateToken = ({ email }: User) => {
  const payload = { email };
  return jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: "7d",
  });
};

export const validateToken = (token: any) => {
  try {
    return jwt.verify(token, process.env.SECRET_KEY);
  } catch (error) {
    throw new Error("Refrescar token");
  }
};
