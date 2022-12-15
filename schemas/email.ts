import { define } from 'superstruct';

const matcher =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const isEmail = (string: string) => {
  if (string.length > 320) return false;
  return matcher.test(string);
};

export const email = () =>
  define<string>(
    'email',
    (value) => typeof value === 'string' && isEmail(value)
  );
