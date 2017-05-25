'use strict';

// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db so any other part of the application could call db.model('user') OR db.models.user to get access to the `user` model.
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)
	// This is an acceptable pattern but it does have limitations in that if you change the name of the model you will have to change every time it is requeired everywhere

// Require in the models:
const User = require('./user')
const Student = require('./student');
const Campus = require('./campus');

// Form the associations:
Student.belongsTo(Campus);
Campus.belongsToMany(Student, { through: 'campusStudents' });

// Exporting for easy access:
module.exports = {
  Student: Student,
  Campus: Campus,
  User: User
};
