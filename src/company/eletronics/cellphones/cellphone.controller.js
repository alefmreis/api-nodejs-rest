const service = require('./cellphone.service');
const { onSuccess, onBadRequest, onError, onCreated, noContent } = require('../../../_shared/handlers/index');
const objectIdValidate = require('../../../_shared/utils/objectIdValidate');

class CellPhoneController {
  async list(ctx) {
    try {
      const res = await service.list(ctx.query);
      onSuccess(res.data, res.meta, ctx);
    } catch (err) {
      onError('Error trying to list cellphones', JSON.stringify(err), ctx);
    }
  }

  async getById(ctx) {
    try {
      if (objectIdValidate(ctx.params.id)) onBadRequest('Bad format of id');

      const res = await service.getById(ctx.params.id)
      onSuccess(res, {}, ctx);
    } catch (err) {
      onError('Error trying to get a cellphone by id', JSON.stringify(err), ctx)
    }
  }

  async create(ctx) {
    try {
      const { body } = ctx.request;
      if (!body.model || !body.brand || !body.year) {
        onBadRequest('Missing fields!', ctx);
      }

      await service.create(body);
      onCreated(ctx);
    } catch (err) {
      onError('Error trying to create cellphone', JSON.stringify(err), ctx);
    }
  }


  async update(ctx) {
    try {

      if (objectIdValidate(ctx.params.id)) onBadRequest('Bad format of id');

      const cellphone = service.getById(ctx.params.id)

      if (!cellphone) onBadRequest('Cellphone not found!');

      const { body } = ctx.request;
      if (body.model || body.brand || body.year || body.description) {
        onBadRequest('Missing fields!', ctx);
      }

      body.id = ctx.params.id;

      await service.update(body);
      noContent(ctx);
    } catch (err) {
      onError('Error trying to update cellphone', JSON.stringify(err), ctx);
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
      onError('Error trying to update a cellphone status', JSON.stringify(err), ctx);
    }
  }

  async delete(ctx) {
    try {
      if (objectIdValidate(ctx.params.id)) onBadRequest('Bad format of id');
      await service.delete(ctx.params.id);
      noContent(ctx);
    } catch (err) {
      onError('Error trying to delete cellphone', JSON.stringify(err), ctx);
    }
  }
}

module.exports = new CellPhoneController();