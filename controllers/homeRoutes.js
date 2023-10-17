const router = require("express").Router();
const { Post, User, Comment } = require("../models");

// GET - homepage
router.get("/", async (req, res) => {});

// GET - one post
router.get("/post/:id", async (req, res) => {});

// GET - sign up
router.get("/signup", async (req, res) => {});

// GET - login
router.get("/login", async (req, res) => {});

//

// GET - dashboard
router.get("/dashboard", async (req, res) => {});

// GET - users post
router.get("/edit/:id", async (req, res) => {});
