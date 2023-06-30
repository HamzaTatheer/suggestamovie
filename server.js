require('dotenv').config()
const express = require('express');
const logger = require('./logger');
const loggerMiddleware = require('./middlware/loggerMiddleware')(logger);

const app = express();
app.use(express.json());
app.use(loggerMiddleware);

// Retrieve all posts
app.get('/posts', async (req, res) => {
  try {
    res.json({});
  } catch (error) {
    console.log(error);
    logger.error("server.js get /posts \n" + error);
    res.status(500).json({ error: 'Failed to retrieve posts' });
  }
});

// Create a new post
app.post('/posts', async (req, res) => {
  const { title, body } = req.body;
  try {
    res.json({});
  } catch (error) {
    console.log(error);
    logger.error("server.js post /posts \n" + error);
    res.status(500).json({ error: 'Failed to create post' });
  }
});


// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  logger.info(`Server is listening on port ${port}`);
});
