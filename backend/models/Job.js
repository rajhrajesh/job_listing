const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Job = sequelize.define('Job', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  companyName: { type: DataTypes.STRING, allowNull: false },
  companyLogoUrl: { type: DataTypes.STRING },
  jobPosition: { type: DataTypes.STRING, allowNull: false },
  monthlySalary: { type: DataTypes.INTEGER },
  jobType: { 
    type: DataTypes.ENUM('Internship', 'Full-Time', 'Part-Time', 'Contractual'), 
    allowNull: false 
  },
  remote: { type: DataTypes.BOOLEAN, allowNull: false },
  location: { type: DataTypes.STRING, allowNull: false },
  jobDescription: { type: DataTypes.TEXT, allowNull: false },
  aboutCompany: { type: DataTypes.TEXT },
  skillsRequired: {
    type: DataTypes.STRING,
    allowNull: false,
    get() { return this.getDataValue('skillsRequired')?.split(',') || []; },
    set(value) { this.setDataValue('skillsRequired', value.join(',')); }
  },
  additionalInfo: { type: DataTypes.TEXT },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false, // ✅ Make sure this is required
    references: { model: User, key: 'id' }, // ✅ Ensure correct foreign key reference
    onDelete: "CASCADE",
  }
}, { timestamps: true });

User.hasMany(Job, { foreignKey: 'userId', onDelete: 'CASCADE' }); // ✅ Ensures jobs are deleted if user is deleted
Job.belongsTo(User, { foreignKey: 'userId' });

module.exports = Job;
