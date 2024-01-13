import { ErrorException } from "@/app/(server)/error/error-exception";
import Joi from "joi";

export const userSchema = Joi.object({
  user: Joi.string().required().min(5),
  email: Joi.string().required().min(5),
  password: Joi.string().required().min(5),
});

export const productSchema = Joi.object({
  name: Joi.string().required().min(1),
  storeId: Joi.number().required().min(1),
  categoryId: Joi.number().required().min(1),
  price: Joi.number().required().min(1),
  image: Joi.string().required().min(1),
  rate: Joi.string().min(1),
  discount: Joi.string().min(1),
});

export function validation<T>(schema: Joi.Schema, payload: T) {
  const valid = schema.validate(payload);
  if (valid.error) {
    throw new ErrorException(valid.error.message);
  }
  return valid;
}
