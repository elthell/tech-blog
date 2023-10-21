const router = require("express").Router();
const { Post, User, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// POST - create post
router.post("/", withAuth, async (req, res) => {
  try {
    // create
    const postData = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    // push
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});

// PUT - update post
router.put("/:id", withAuth, async (req, res) => {
  try {
    // find
    const postData = await Post.update(
      {
        title: req.body.title,
        body: req.body.body,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    // push
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});

// DELETE - delete post
router.delete("/:id", withAuth, async (req, res) => {
  try {
    // find
    const postData = Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    // push
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});

module.exports = router;