class RequestHandler {
  static onSuccess(data, meta, ctx) {
    ctx.status = 200;
    ctx.body = {
      data,
      meta
    };
  }

  static onError(message, errors, ctx) {
    ctx.status = 500;
    ctx.body = {
      message,
      errors
    };
  }

  static onBadRequest(body, ctx) {
    ctx.status = 400;
    ctx.body = typeof body === 'string' ? { message: body } : body;
  }

  static onCreated(ctx) {
    ctx.status = 201;
    ctx.body = '';
  }

  static noContent(ctx) {
    ctx.status = 204;
    ctx.body = '';
  }


}

module.exports = RequestHandler;
