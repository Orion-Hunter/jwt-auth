const { compare } = require('bcryptjs');
const { sign } = require('jsonwebtoken');
const authConfig = require('../config/auth');
const UserRepository = require('../repositories/UserRepository');

/**
 * @typedef { Object } Request
 * @property { string } login
 * @property { string } password
 */

/**
 * @class
 */
class AuthUserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  /**
   *
   * @param { Request } data
   */
  async execute({ login, password }) {
    const user = await this.userRepository.findByLogin(login);

    if (!user) {
      throw new Error('Invalid credentials');
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new Error('Invalid credentials');
    }

    const { expiresIn, secret } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: JSON.stringify({ id: user.id, type: user.type }),
      expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

module.exports = AuthUserService;
