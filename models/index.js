const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// user has many post

// post belongs to user

// comment belongs to user

// comment belongs to post

// user has many comment

// post has many comment 

module.exports = { User, Post, Comment }