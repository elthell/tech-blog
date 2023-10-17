const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
        // id
        // title
        // body
        // user_id
    }, 
    {
        // sequelize
    }
);

module.exports = Post;