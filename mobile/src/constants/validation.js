export default {
  CASE: {
    PASSWORD: 'password',
    EMAIL: 'email',
    USER_NAME: 'username',
    EMAILORUSERNAME: 'emailorusername',
  },
  RULES: {
    EMAIL: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    PASSWORD: /[0-9a-zA-Z]{6,}$/,
    USER_NAME: /^[A-Za-z0-9]{3,}$/,
  },
};
