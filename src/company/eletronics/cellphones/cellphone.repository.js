const { CellPhone } = require('./cellphone.model');

class CellPhoneRepository {

  list(query = {}, paging) {
    return CellPhone
      .find(query)
      .limit(paging.limit)
      .skip(paging.skip)
      .lean();
  }

  count(query = {}) {
    return CellPhone.countDocuments(query);
  }

  findById(id) {
    return CellPhone.findById(id);
  }

  create(cellphone) {
    return CellPhone.create(cellphone);
  }

  update(cellphone) {
    return CellPhone.update(
      { _id: cellphone.id },
      {
        $set: {
          description: cellphone.description,
          brand: cellphone.brand,
          year: cellphone.year,
          model: cellphone.model,
          sold: cellphone.sold
        }
      }
    );
  }

  updateStatus(id, status) {
    return CellPhone.update({ _id: id }, { $set: { sold: status } });
  }

  delete(id) {
    return CellPhone.delete({ _id: id });
  }
}

module.exports = new CellPhoneRepository();
