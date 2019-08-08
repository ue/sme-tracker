import LOGIN from '../constants/validation';

export default (value, type) => {
  if (value) {
    switch (type) {
      case LOGIN.CASE.EMAIL:
        return LOGIN.RULES.EMAIL.test(String(value).toLowerCase());
      case LOGIN.CASE.USER_NAME:
        return LOGIN.RULES.USER_NAME.test(String(value).toLowerCase());
      case LOGIN.CASE.PASSWORD:
        return LOGIN.RULES.PASSWORD.test(String(value));
      default:
        return null;
    }
  }
  return false;
};
