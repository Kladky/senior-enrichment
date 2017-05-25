'use strict'
const Sequelize = require('sequelize');
const db = require('../');

// Model definition:
const Campus = db.define('campus', {
    name: {
        type: Sequelize.STRING(),
        allowNull: false
    },
    location: {
        type: Sequelize.TEXT()
    },
    description: {
        type: Sequelize.TEXT()
    }
}, {

});

module.exports = Campus;