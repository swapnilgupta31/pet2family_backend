// blogPost.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    blog: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;