const meetLoaf = require('./meet-loaf/meet-loaf.service.js');
const meeting = require('./meeting/meeting.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(meetLoaf);
  app.configure(meeting);
};
