const UserRepository = require('../repositories/UserRepository');
const { hash } = require('bcryptjs');

/**
 * @typedef { Object } Request
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
 */

/**
 * Instance a CreateUserService
 * @constructor
 */
class CreateUserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  /**
   *
   * @param { Request } data
   * @return { Promise<User> }
   */
  async execute({ login, password }) {
    const checkUserExists = await this.userRepository.findByLogin(login);
    console.log('checkUserExists');
    if (checkUserExists) {
      throw new Error('The login address has already used');
    }
    const hashedPassword = await hash(password, 8);

    const user = await this.userRepository.create({
      login,
      password: hashedPassword,
    });

    return user;
  }

  async findByLogin({ login, password }) {
    const checkUserExists = await this.userRepository.findByLogin(login);
    if (checkUserExists) {
      if (hash.compare(checkUserExists.password, password)) {
        return checkUserExists;
      } else {
        throw new Error('Password is Incorrect!');
      }
    } else {
      throw new Error('User does not exists');
    }
  }
}

module.exports = CreateUserService;
