const router = require('express').Router();
const {  Comment  } = require('../../models');
const withAuth = require('../../utils/auth');

// POST - create comment
router.post('/', withAuth, async (req, res) => {})

// PUT - update comment
router.put('/:id', withAuth, async (req, res) => {})

// DELETE - delete comment 
router.delete('/:id', withAuth, async (req, res) => {})