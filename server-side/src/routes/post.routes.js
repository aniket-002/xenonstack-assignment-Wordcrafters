const express = require("express");
const router = express.Router();
const {
  isAuthenticated,
  isSignedIn,
} = require("../controllers/auth.controller");

const { getuserById } = require("../controllers/user.controller");

const {
  getPosts,
  getPost,
  createPost,
  deletePost,
  updatePost,
  getPostById,
  getUsersPostByUsername,
} = require("../controllers/post.controller");

router.param("userId", getuserById);
router.param("postId", getPostById);

//get routes
router.get("/api/post", getPosts);
router.get("/api/post/:postId", getPost);
router.get(
  "/api/all/post/:userId",
  isSignedIn,
  isAuthenticated,
  getUsersPostByUsername
);

//post routes
router.post("/api/new/post/:userId", isSignedIn, isAuthenticated, createPost);
router.put(
  "/api/update/:getPostById/:userId",
  isSignedIn,
  isAuthenticated,
  updatePost
);

// delete routes // not implemented at frontend yet
router.delete(
  "/api/delete/:getPostById/:userId",
  isSignedIn,
  isAuthenticated,
  deletePost
);

//Export
module.exports = router;
