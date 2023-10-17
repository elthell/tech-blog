const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// POST - create user
router.post('/', async (req, res) => {})

// POST - login user
router.post('/login', async (req, res) => {})

// POST - logout user
router.post('/logout', async (req, res) => {})

// PUT - update uset
router.put('/:id', async (req, res) => {})

// DELETE - delete user 
router.delete('/:id', async (req, res) => {})