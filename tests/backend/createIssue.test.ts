import { createMocks } from 'node-mocks-http';
import handler from '../../src/pages/api/issues/create';

describe('/api/issues/create API Endpoint', () => {
  it('creates a new issue successfully', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        title: 'Test Issue',
        description: 'This is a test issue.',
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    const data = JSON.parse(res._getData());
    expect(data.title).toBe('Test Issue');
  });

  // Add more tests as needed
});
