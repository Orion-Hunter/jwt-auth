const { Router } = require('express');
const sessionRouter = require('./session.routes');
const userRouter = require('./user.routes');

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ api: 'JWT AUTH' });
});

routes.use('/sessions', sessionRouter);
routes.use('/users', userRouter);

module.exports = routes;
