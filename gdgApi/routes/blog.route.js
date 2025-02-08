const express = require("express");
const Product = require("../models/blog.model.js");
const router = express.Router();
const {getBlogs, getBlog, createBlog, updateBlog, deleteBlog} = require('../Controllers/blog.controller.js');


router.get('/', getBlogs);
router.get("/:id", getBlog);

router.post("/", createBlog);

// update a product
router.put("/:id", updateBlog);

// delete a product
router.delete("/:id", deleteBlog);

module.exports = router;