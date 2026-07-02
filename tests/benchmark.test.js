import request from 'supertest';
import app from '../src/app';

describe('API benchmark', () => {
  it('API responds within 400ms', async () => {
    const start = Date.now();
    await request(app).get('/api');
    const duration = Date.now() - start;
    expect(duration).toBeLessThan(400);
  });
});