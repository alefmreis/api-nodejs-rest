const Router = require('koa-router');
const controller = require('./cellphone.controller');

const routes = new Router();

routes.prefix('/api/celulares');
routes.get('/', controller.list);
routes.get('/find', controller.list);
routes.get('/:id', controller.getById);
routes.post('/', controller.create);
routes.put('/:id', controller.update);
routes.patch('/:id', controller.updateStatus);
routes.delete('/:id', controller.delete);

module.exports = routes;
