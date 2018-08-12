

const jwt = require('jsonwebtoken');
const { secret } = require('../enviroments');

class Auth {

  static isLoggedIn(ctx) {

    const { authorization } = ctx.request.headers;

    if (!authorization) {
      ctx.body = {
        status: 401,
        message: 'Token not provided!'
      };
      return ctx;
    }

    jwt.verify(authorization, secret, (err, decode) => {
      if (err) {
        ctx.body = {
          status: 401,
          message: err.message
        };
      }
      return decode;
    });

    return true;
  }
}

module.exports = Auth;
