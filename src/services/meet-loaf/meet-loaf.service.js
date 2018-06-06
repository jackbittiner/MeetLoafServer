// Initializes the `MeetLoaf` service on path `/meet-loaf`
const createService = require('feathers-sequelize');
const createModel = require('../../models/meet-loaf.model');
const hooks = require('./meet-loaf.hooks');
const filters = require('./meet-loaf.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'meet-loaf',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/meet-loaf', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('meet-loaf');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
