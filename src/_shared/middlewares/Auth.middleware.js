

const jwt = require('jsonwebtoken');
const { secret } = require('../enviroments');

class Auth {

  static async isLoggedIn(ctx, next) {

    const { authorization } = ctx.request.headers;

    if (!authorization) {
      ctx.body = {
        status: 401,
        message: 'Token not provided!'
      };
      return ctx;
    }

    const validate = jwt.verify(authorization, secret, (err, decode) => {
      if (err) {
        ctx.status = 401;
        ctx.body = {
          message: err.message
        };
        return;
      }
      ctx.user = decode.data;
    });

    if (!validate) return;
    await next();
  }
}

module.exports = Auth;
