const Blog = require("../models/blog.model");

const getBlogs = async (req, res) => {
  try {
    const blog = await Blog.find({});
    console.log(blog);
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createBlog = async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.status(200).json(User);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await Blog.findByIdAndUpdate(id, req.body);

    if (!blog) {
      return res.status(404).json({ message: "blog  not found" });
    }

    const updatedblog = await Blog.findById(id);
    res.status(200).json(updatedblog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await Blog.findByIdAndDelete(id);

    if (!blog) {
      return res.status(404).json({ message: "blog not found" });
    }

    res.status(200).json({ message: "blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
};
