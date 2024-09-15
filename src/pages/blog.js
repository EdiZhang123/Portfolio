// pages/blog.js

import React, { useEffect, useState } from "react";
import BlogRectangle from "../components/Blog/BlogRectangles";
import postsData from "./posts.json";

import "./blog.css";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  const getFirstWords = (text, wordLimit) => {
    // Split the text into words
    const words = text.split(" ");

    // Join the first 'wordLimit' words into a string
    return (
      words.slice(0, wordLimit).join(" ") +
      (words.length > wordLimit ? "..." : "")
    );
  };

  useEffect(() => {
    setPosts(postsData);
  }, []);

  return (
    <div className="blog-container">
      <h1 className="heading">Blog</h1>
      <div className="sub-container">
        {posts.map((post, index) => (
          <BlogRectangle
            key={index}
            title={post.title}
            date={post.date}
            preview={getFirstWords(post.content, 35)}
            fullContent={post.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
