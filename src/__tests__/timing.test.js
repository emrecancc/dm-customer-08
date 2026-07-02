// src/__tests__/timing.test.js
import request from 'supertest';
import app from '../app';

describe('API timing', () => {
  it('API responds within 300ms', async () => {
    const start = Date.now();
    await request(app).get('/api');
    const elapsed = Date.now() - start;
    expect(elapsed).toBeLessThan(300);
  });
});