const Koa = require('koa');
const cors = require('koa2-cors');
const Database = require('../data/database');


class App {
  static connect() {
    Database.connect();

    App.server = new Koa();
    App.server.use(cors({
      origin: '*',
      allowMethods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      credentials: true
    }));
    App.server.use(require('koa-bodyparser')());

    require('../routes/routes').resolve(App.server);
    App.server.listen(App.port);

    console.log(`API server is listening on port ${App.port}!`);
  }
}

App.port = process.env.PORT || 3500;
module.exports = App;
