module.exports = (body, ctx) => {
  ctx.status = 400;
  ctx.body = typeof body === 'string' ? { message: body } : body;
};