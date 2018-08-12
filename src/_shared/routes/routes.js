const cellPhonesRotes = require('../../company/eletronics/cellphones/cellphone.routes');
const userRoutes = require('../../company/users/user.routes');


class Routing {

  resolve(app) {
    app.use(cellPhonesRotes.routes());
    app.use(userRoutes.routes());
  }

}

module.exports = new Routing();
