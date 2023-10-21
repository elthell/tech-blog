const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// POST - create comment
router.post("/", withAuth, async (req, res) => {
  if (req.session) {
    try {
      // create
      const commentData = await Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.session.user_id,
        post_id: req.body.post_id,
      });

      // push
      res.status(200).json(commentData);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }
});

// PUT - update comment
router.put("/:id", withAuth, async (req, res) => {
  try {
    // find
    const commentData = await Comment.update(
      {
        comment_text: req.body.comment_text,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    // push if there's anything
    if (!commentData) {
      res.status(400).json({ message: "No comment found with this id" });
      return;
    } else {
      res.status(200).json(commentData);
    }
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});

// DELETE - delete comment
router.delete("/:id", withAuth, async (req, res) => {
  try {
    // find
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });

    // push if there's anything
    if (!commentData) {
        res.status(400).json({ message: "No comment found with this id" });
        return;
      } else {
        res.status(200).json(commentData);
      }
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});

module.exports = router;