const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// user has many post
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// post belongs to user
Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

// comment belongs to user
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

// comment belongs to post
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});

// user has many comment
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

// post has many comment 
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Comment }