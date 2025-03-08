const sequelize = require('../config/database');
const User = require('./User');
const Job = require('./Job');

const syncDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.');

    await sequelize.sync({ alter: true }); // Ensures schema updates without deleting data
    console.log('All models synchronized successfully.');
  } catch (error) {
    console.error('Database connection failed:', error);
  }
};

syncDatabase();

module.exports = { sequelize, User, Job };
