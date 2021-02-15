const { Router } = require('express');
const AuthUserService = require('../app/services/AuthUserService');

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { login, password } = request.body;

  try {
    const authenticateUser = new AuthUserService();

    const { user, token } = await authenticateUser.execute({
      login,
      password,
    });

    user.password = undefined;

    return response.json({
      user,
      token,
    });
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

module.exports = sessionsRouter;
