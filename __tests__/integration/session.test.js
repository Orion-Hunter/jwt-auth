const request = require('supertest');
const app = require('../../src/app');
const truncate = require('../utils/truncate');

describe('Session Test', () => {
  afterEach(async () => {
    await truncate();
  });

  it('User authenticated when it gives valid credentials', async () => {
    const response = await request(app).post('/sessions').send({
      login: 'John Doe',
      password: '12345',
    });
    console.log(response.body);
    expect(response.status).toBe(200);
  });

  it('User not authenticated when it gives invalid credentials', async () => {
    const response = await request(app).post('/sessions').send({
      login: 'John Doe',
      password: '123456',
    });
    console.log(response.body);
    expect(response.status).toBe(400);
  });
});
