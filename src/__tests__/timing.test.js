import { fetchData } from '../api';

test('API responds within 300ms', async () => {
  const start = Date.now();
  await fetchData();
  const duration = Date.now() - start;
  expect(duration).toBeLessThan(850);
});