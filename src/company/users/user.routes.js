const Router = require('koa-router');
const controller = require('./user.controller');
const Auth = require('../../_shared/middlewares/Auth.middleware');

const routes = new Router();

routes.prefix('/api/usuarios');
routes.get('/login', controller.login);
routes.post('/', controller.create);

module.exports = routes;
