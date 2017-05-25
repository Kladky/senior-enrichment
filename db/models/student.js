'use strict'
const Sequelize = require('sequelize');
const db = require('../');

// Model definition:
const Student = db.define('student', {
    name: {
        type: Sequelize.STRING(),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(),
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    }
}, {

});

module.exports = Student;