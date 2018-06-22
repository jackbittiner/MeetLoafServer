const assert = require('assert');
const app = require('../../src/app');

describe('\'sprint\' service', () => {
  it('registered the service', () => {
    const service = app.service('sprint');

    assert.ok(service, 'Registered the service');
  });
});
