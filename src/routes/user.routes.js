const { Router } = require('express');
const CreateUserService = require('../app/services/CreateUserService');
const userRouter = Router();

userRouter.post('/', async (req, res) => {
  const { login, password } = req.body;

  try {
    const createUser = new CreateUserService();
    const user = await createUser.execute({ login, password });
    delete user.password;
    return res.json(user);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

module.exports = userRouter;
