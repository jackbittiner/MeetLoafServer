// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get('sequelizeClient');
  const meeting = sequelizeClient.define(
    'meeting',
    {
      NumberOfAttendees: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      Length: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      }
      // sprintId: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false
      // }
    },
    {
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    }
  );

  meeting.associate = function(models) {
    meeting.belongsTo(models.sprint);
    // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return meeting;
};
