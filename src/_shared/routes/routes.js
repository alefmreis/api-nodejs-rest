const cellPhonesRotes = require('../../company/eletronics/cellphones/cellphone.routes');


class Routing {

  resolve(app) {
    app.use(cellPhonesRotes.routes());
  }

}

module.exports = new Routing();
