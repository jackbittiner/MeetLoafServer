const assert = require('assert');
const app = require('../../src/app');

describe('\'MeetLoaf\' service', () => {
  it('registered the service', () => {
    const service = app.service('meet-loaf');

    assert.ok(service, 'Registered the service');
  });
});
