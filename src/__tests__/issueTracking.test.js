const request = require('supertest');
const app = require('../app');

describe('Issue Tracking', () => {
  it('should create a new issue', async () => {
    const response = await request(app)
      .post('/issues')
      .send({ title: 'Sample Issue', description: 'This is a test issue.' });
    expect(response.statusCode).toBe(201);
  });
});
