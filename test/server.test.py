import request from 'supertest';
import server from '../server';

let serverInstance;

beforeAll(() => {
  serverInstance = server.listen(0);
});

afterAll(() => {
  serverInstance.close();
});

describe('GET /', () => {
  it('returns 200', async () => {
    const res = await request(serverInstance).get('/');
    expect(res.status).toBe(200);
  });
});