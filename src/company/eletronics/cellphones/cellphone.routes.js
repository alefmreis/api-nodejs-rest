const Router = require('koa-router');
const controller = require('./cellphone.controller');
const Auth = require('../../../_shared/middlewares/Auth.middleware');

const routes = new Router();

routes.prefix('/api/eletronicos/celulares');
routes.get('/', Auth.isLoggedIn, controller.list);
routes.get('/find', Auth.isLoggedIn, controller.list);
routes.get('/:id', Auth.isLoggedIn, controller.getById);
routes.post('/', Auth.isLoggedIn, controller.create);
routes.put('/:id', Auth.isLoggedIn, controller.update);
routes.patch('/:id', Auth.isLoggedIn, controller.updateStatus);
routes.delete('/:id', Auth.isLoggedIn, controller.delete);

module.exports = routes;
