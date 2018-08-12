const Mongoose = require('mongoose');

Mongoose.Promise = global.Promise;

class Database {

  static get conn() {
    if (!Database.connection) {
      throw new Error('Database is not connected!');
    }
    return Database.connection;
  }

  static connect() {
    const url = process.env.DATABASE || 'mongodb://localhost:27017/eletronics';
    Database.connection = Mongoose.createConnection(url, { useNewUrlParser: true });
  }
}

module.exports = Database;
