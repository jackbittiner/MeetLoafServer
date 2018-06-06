// Initializes the `Meeting` service on path `/meeting`
const createService = require('feathers-sequelize');
const createModel = require('../../models/meeting.model');
const hooks = require('./meeting.hooks');
const filters = require('./meeting.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'meeting',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/meeting', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('meeting');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
