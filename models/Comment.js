const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        // id
        // text
        // user_id
        // post_id
    },
    {
        // sequelize
    }
);

module.exports = Comment;