const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// POST - create post
router.post('/', withAuth, async (req, res) => {})

// PUT - update post
router.put('/:id', withAuth, async (req, res) => {})

// DELETE - delete post
router.delete('/:id', withAuth, async (req, res) => {})