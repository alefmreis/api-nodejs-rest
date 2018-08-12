
module.exports = (message, errors, ctx) => {
  ctx.status = 500;
  ctx.body = {
    message,
    errors
  }
};