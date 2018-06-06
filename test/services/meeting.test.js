const assert = require('assert');
const app = require('../../src/app');

describe('\'Meeting\' service', () => {
  it('registered the service', () => {
    const service = app.service('meeting');

    assert.ok(service, 'Registered the service');
  });
});
