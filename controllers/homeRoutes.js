const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

// GET - homepage
router.get("/", async (req, res) => {
  try {
    // all posts
    const postData = await Post.findAll({
      attributes: ["id", "title", "body", "created_at"],
      include: [
        {
          model: Comment,
          attributes: ["id", "text", "post_id", "user_id", "created_at"],
          include: {
            model: User,
            attributes: ["username"],
          },
        },
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    // serialize
    const posts = postData.map((post) => post.get({ plain: true }));

    // pass into template
    res.render("homepage", {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// GET - one post
router.get("/post/:id", async (req, res) => {
  try {
    // one post
    const postData = await Post.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ["id", "title", "body", "created_at"],
      include: [
        {
          model: Comment,
          attributes: ["id", "text", "post_id", "user_id", "created_at"],
          include: {
            model: User,
            attributes: ["username"],
          },
        },
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    // serialize
    const post = postData.get({ plain: true });

    // pass into template
    res.render("onePost", {
      post,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// GET - user
router.get("/login", async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

//

// GET - dashboard
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    // all user posts
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
      attributes: ["id", "title", "body", "created_at"],
      include: [
        {
          model: Comment,
          attributes: ["id", "text", "post_id", "user_id", "created_at"],
          include: {
            model: User,
            attributes: ["username"],
          },
        },
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    //serialize
    const posts = postData.map((post) => post.get({ plain: true }));

    // pass into template
    res.render("dashboard", {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// GET - users post
router.get("/edit/:id", async (req, res) => {
  try {
    // one user post
    const postData = await Post.findByPk(req.params.id, {
      attributes: ["id", "title", "body", "created_at"],
      include: [
        {
          model: Comment,
          attributes: ["id", "text", "post_id", "user_id", "created_at"],
          include: {
            model: User,
            attributes: ["username"],
          },
        },
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    // serialize
    const post = postData.get({ plain: true });

    // pass into template
    res.render("editPost", {
      post,
      loggedIn: true,
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
