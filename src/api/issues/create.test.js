import handler from './create';

describe('POST /api/issues/create', () => {
  it('should return 405 if method is not POST', async () => {
    const req = { method: 'GET' };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(405);
    expect(res.json).toHaveBeenCalledWith({ message: 'Method not allowed' });
  });

  it('should return 401 if not authenticated', async () => {
    const req = { method: 'POST', headers: {} };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ message: 'Unauthorized' });
  });

  it('should return 400 if title or body is missing', async () => {
    const req = { method: 'POST', headers: { authorization: 'valid-token-1' }, body: {} };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: 'Title and body are required' });
  });

  it('should create an issue and return 201', async () => {
    const req = {
      method: 'POST',
      headers: { authorization: 'valid-token-1' },
      body: { title: 'Test Issue', body: 'This is a test issue.' },
    };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ title: 'Test Issue', body: 'This is a test issue.' }));
  });
});