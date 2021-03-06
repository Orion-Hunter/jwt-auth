const { verify } = require('jsonwebtoken');
const authConfig = require('../config/auth');

/**
 * @param { Request } request
 * @param { Response } response
 * @param { import('express').NextFunction } next
 * @returns { import('express').NextFunction }
 */

module.exports = function ensureAuthenticated(request, response, next) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({ error: 'User not authenticated!' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    const { sub } = decoded;

    const user = JSON.parse(sub);

    request.user = {
      id: user.id,
      token: user.token,
    };

    return next();
  } catch (error) {
    return response.status(401).json({ error: 'Incorrect JWT token' });
  }
};
