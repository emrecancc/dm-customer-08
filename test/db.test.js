const { User } = require('../src/models');
const sequelize = require('../src/database');

describe('User model', () => {
  beforeEach(async () => {
    await User.destroy({ where: {}, truncate: true });
  });

  it('creates a user', async () => {
    const user = await User.create({ name: 'Alice' });
    expect(user.id).toBeDefined();
  });

  it('starts with empty database', async () => {
    const count = await User.count();
    expect(count).toBe(0);
  });
});