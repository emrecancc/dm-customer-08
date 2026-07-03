import server from '../server';

let srv;

beforeAll(() => {
  srv = server.listen(0);
});

afterAll(() => srv.close());

// Existing tests remain unchanged
