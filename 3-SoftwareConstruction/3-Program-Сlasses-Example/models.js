const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
});

const Schedule = sequelize.define('schedule', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    sleepMessageText: { type: DataTypes.STRING, unique: true, allowNull: false },
    sendingTime: { type: DataTypes.FLOAT, allowNull: false },
});

const SleepMessage = sequelize.define('sleepMessage', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    sendingTime: { type: DataTypes.FLOAT, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
});

const SleepDuration = sequelize.define('sleepDuration', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    sleepQuality: { type: DataTypes.INTEGER, defaultValue: 1 },
    sleepStart: { type: DataTypes.INTEGER, defaultValue: 1 },
    sleepEnd: { type: DataTypes.INTEGER, defaultValue: 1 },
});

const Project = sequelize.define('project', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true },
    description: { type: DataTypes.STRING, allowNull: false },
});

// Associations
Schedule.hasOne(SleepMessage, { as: 'sleepMessageAssociation', foreignKey: 'scheduleId' });
SleepMessage.belongsTo(Schedule, { as: 'sleepMessageAssociation', foreignKey: 'scheduleId' });

User.hasMany(Project, { foreignKey: 'userId' });
Project.belongsTo(User, { foreignKey: 'userId' });

User.hasOne(SleepMessage, { as: 'userSleepMessageAssociation', foreignKey: 'userId' });
SleepMessage.belongsTo(User, { as: 'userSleepMessageAssociation', foreignKey: 'userId' });

User.hasMany(SleepDuration, { foreignKey: 'userId' });
SleepDuration.belongsTo(User, { foreignKey: 'userId' });

module.exports = {
    User,
    Schedule,
    SleepMessage,
    SleepDuration,
    Project,
};
