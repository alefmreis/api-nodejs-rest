const mongoose = require('mongoose');

module.exports = (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error({
      message: 'Invalid ObjectId'
    });
  }
}
