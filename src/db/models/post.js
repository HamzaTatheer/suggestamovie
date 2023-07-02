// models/Post.js

const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // Assuming you have your Sequelize instance in a separate file

const Post = sequelize.define('Post', {
  id:{
    type: DataTypes.INTEGER,
    allowNull:true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  createdAt:{
    type: DataTypes.DATE,
    allowNull:false

  },
  updatedAt:{
    type: DataTypes.DATE,
    allowNull:false
  }
});

module.exports = Post;