const service = require('./cellphone.service');
const { onSuccess, onBadRequest, onError, onCreated, noContent } = require('../../../_shared/handlers/request.handler');
const objectIdValidate = require('../../../_shared/utils/objectIdValidate');


class CellPhoneController {
  async list(ctx) {
    try {
      const res = await service.list(ctx.query);
      onSuccess(res.data, res.meta, ctx);
    } catch (err) {
      onError('Error trying to list cellphones', err.toString(), ctx);
    }
  }

  async getById(ctx) {
    try {
      if (objectIdValidate(ctx.params.id)) onBadRequest('Bad format of id');

      const res = await service.getById(ctx.params.id);
      ctx.status = 200;
      ctx.body = res;
    } catch (err) {      
      onError('Error trying to get a cellphone by id', err.toString(), ctx);
    }
  }

  async create(ctx) {
    try {
      const { body } = ctx.request;
      if (!body.model || !body.brand || !body.year) {
        return onBadRequest('Missing fields!', ctx);
      }

      await service.create(body);
      onCreated(ctx);
    } catch (err) {
      onError('Error trying to create cellphone', err.toString(), ctx);
    }
  }


  async update(ctx) {
    try {

      if (objectIdValidate(ctx.params.id)) return onBadRequest('Bad format of id');

      const cellphone = service.getById(ctx.params.id);

      if (!cellphone) onBadRequest('Cellphone not found!');

      const { body } = ctx.request;
      
      if (!body.model || !body.brand || !body.year || !body.description) return onBadRequest('Missing fields!', ctx);

      body.id = ctx.params.id;
      await service.update(body);
      noContent(ctx);
    } catch (err) {
      onError('Error trying to update cellphone', err.toString(), ctx);
    }
  }

  async updateStatus(ctx) {
    try {
      if (objectIdValidate(ctx.params.id)) onBadRequest('Bad format of id');

      const cellphone = service.getById(ctx.params.id);

      if (!cellphone) onBadRequest('Cellphone not found!');

      const { status } = ctx.request.body;

      if (typeof status !== 'boolean') {
        onBadRequest('Status needs to be a boolean!', ctx);
      }

      await service.updateStatus(ctx.params.id, status);
      noContent(ctx);
    } catch (err) {
      onError('Error trying to update a cellphone status', err.toString(), ctx);
    }
  }

  async delete(ctx) {
    try {
      if (objectIdValidate(ctx.params.id)) onBadRequest('Bad format of id');
      await service.delete(ctx.params.id);
      noContent(ctx);
    } catch (err) {
      onError('Error trying to delete cellphone', err.toString(), ctx);
    }
  }
}

module.exports = new CellPhoneController();