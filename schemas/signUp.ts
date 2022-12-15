import { object, string, optional, Infer, size, nonempty } from 'superstruct';
import { email } from './email';

export const SignUpSchema = object({
  name: nonempty(string()),
  surname: nonempty(string()),
  password: size(string(), 6, Infinity),
  email: email(),
  phone: optional(string()),
});

export type SignUpData = Infer<typeof SignUpSchema>;
