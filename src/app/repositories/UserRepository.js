const { Op } = require('sequelize');
const models = require('../models');

/**
 * @typedef { Object } UserDTO
 * @property { string } login
 * @property { string } password
 */

/**
 * @typedef { Object } User
 * @property { string } id
 * @property { string } login
 * @property { string } password
 * @property { Date } createdAt
 * @property { Date } updatedAt
/**
 * @class UserRepository
 */
class UserRepository {
  /**
   *
   * @param { UserDTO } data
   * @returns { Promise<User>}
   */
  async create({ login, password }) {
    const user = models.Usuario.build({
      login,
      password,
    });

    await user.save();

    return user;
  }

  /**
   *
   * @param { string } login
   * @return { Promise<Usuario> }
   */
  async findByLogin(login) {
    const user = await models.User.findOne({
      where: {
        login,
      },
    });

    return user;
  }
}

module.exports = UserRepository;
