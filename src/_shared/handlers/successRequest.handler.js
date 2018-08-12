
module.exports = (data, meta, ctx) => {
  ctx.status = 200;
  ctx.body = {
    data,
    meta
  };
};
