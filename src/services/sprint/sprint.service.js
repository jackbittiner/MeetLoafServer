// Initializes the `sprint` service on path `/sprint`
const createService = require('feathers-sequelize');
const createModel = require('../../models/sprint.model');
const hooks = require('./sprint.hooks');
const filters = require('./sprint.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'sprint',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/sprint', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('sprint');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
