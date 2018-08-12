const repository = require('./user.repository');
const jwt = require('jsonwebtoken');
const { secret } = require('../../_shared/enviroments');

class UserService {

  async create(obj) {
    const user = await repository.findOne({ email: obj.email });
    if (user) throw new Error('This email already exist');

    return repository.create(obj);
  }

  async login(body) {
    const user = await repository.findOne({ email: body.email, password: body.password });
    if (!user) throw new Error('User nod registered!');

    const token = jwt.sign({ data: { email: user.email, password: user.password } }, secret, {
      expiresIn: 60 * 30
    });

    return token;
  }

  async delete(body) {
    const user = await repository.findOne({ email: body.email, password: body.password });
    if (!user) throw new Error('User nod registered!');

    return repository.delete(user.id);
  }


}

module.exports = new UserService();
