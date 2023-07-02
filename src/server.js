require('dotenv').config()

const logger = require('./logger');
const loggerMiddleware = require('./middlware/loggerMiddleware')(logger);

// index.js
const express = require('express');
const bodyParser = require('body-parser');
const Post = require('./db/models/post');

const app = express();
 // form data input
app.use(express.urlencoded({ extended: true }));
// send logs to aws
app.use(loggerMiddleware);
//ejs views setup
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//constants
const port = process.env.PORT ? process.env.PORT : 3000;


// Routes
// Create a post
app.post('/posts', async (req, res) => {
  try {
    const { title, body } = req.body;
    const post = await Post.create({ title, body });
    res.redirect('/');  
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'Failed to create post' });
  }
});

// Get all posts
app.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.render('index', { posts });
  } catch (error) {
    console.error('Error getting posts:', error);
    res.status(500).json({ error: 'Failed to get posts' });
  }
});

// Get a single post by ID
app.get('/posts/:id', async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findByPk(postId);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    console.error('Error getting post:', error);
    res.status(500).json({ error: 'Failed to get post' });
  }
});

// Update a post by ID
app.put('/posts/:id', async (req, res) => {
  try {
    const postId = req.params.id;
    const { title, body } = req.body;
    const post = await Post.findByPk(postId);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    await post.update({ title, body });
    res.json(post);
  } catch (error) {
    console.error('Error updating post:', error);
    res.status(500).json({ error: 'Failed to update post' });
  }
});

// Delete a post by ID
app.delete('/posts/:id', async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findByPk(postId);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    await post.destroy();
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({ error: 'Failed to delete post' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});