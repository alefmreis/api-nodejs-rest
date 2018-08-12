const service = require('./user.service');
const { onError, onCreated } = require('../../_shared/handlers/request.handler');

class UserController {
  async create(ctx) {
    try {
      const { body } = ctx.request;

      if (!body.email || !body.password) throw new Error('Missing fields! check if email or password');

      await service.create(body);
      onCreated(ctx);
    } catch (err) {
      onError('Error trying to create a user', err.toString(), ctx);
    }
  }

  async login(ctx) {
    try {
      const { body } = ctx.request;

      if (!body.email || !body.password) throw new Error('Missing fields! check if email or password');

      const res = await service.login(body);

      ctx.status = 200;
      ctx.body = { data: res };
    } catch (err) {
      onError('Error trying to login', err.toString(), ctx);
    }
  }

  async delete(ctx) {
    try {
      const { body } = ctx.request;

      if (!body.email || !body.password) throw new Error('Missing fields! check if email or password');

      const res = service.delete(body);
      ctx.status = 200;
      ctx.body = res;
    } catch (err) {
      onError('Error trying to delete user', err.toString(), ctx);
    }
  }


}

module.exports = new UserController();