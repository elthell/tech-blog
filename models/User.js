const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    // password security
}

User.init(
    {
        // id
        // username
        // email
        // password
    },
    {
        // hooks
        // sequelize
    }
);

module.exports = User;
