const repository = require('./cellphone.repository');
const pagination = require('../../../_shared/helpers/pagination.helper');
const filters = require('../../../_shared/helpers/filter.helper');

class CellPhoneService {

  async list(query) {
    const params = filters.build(query)
    const paginate = pagination.build({ limit: query.limit, page: query.page });
    const total = await repository.count(query);
    const data = await repository.list(params, paginate);

    return { data, meta: pagination.resolve(paginate, total) };
  }

  async getById(id) {
    const cellphone = await repository.findById(id);
    if (!cellphone) throw new Error('Cellphone not exist!');
    return cellphone;
  }

  create(obj) {
    return repository.create(obj);
  }

  update(obj) {
    return repository.update(obj);
  }

  updateStatus(id, status) {
    return repository.updateStatus(id, status);
  }

  delete(id) {
    return repository.delete(id);
  }
}

module.exports = new CellPhoneService();
