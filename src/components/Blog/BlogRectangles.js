// components/Blogrectangle.js
import React, { useState, useRef } from "react";
import "./rectangles.css"; // Assuming you'll add some custom CSS for styling

const BlogRectangle = ({ title, date, preview, fullContent }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Function to render content with newline splits
  const renderContent = (content) => {
    return content
      .split("\n")
      .map((line, index) => <p key={index}>{processBold(line)}</p>);
  };
  // Function to process bold text marked by ** in the content
  const processBold = (text) => {
    const boldPattern = /\*\*(.*?)\*\*/g; // Match text between **
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = boldPattern.exec(text)) !== null) {
      const boldText = match[1];
      const matchStart = match.index;
      const matchEnd = boldPattern.lastIndex;

      // Add normal text before the bold match
      if (matchStart > lastIndex) {
        parts.push(text.slice(lastIndex, matchStart));
      }

      // Add the bold text
      parts.push(<strong key={matchStart}>{boldText}</strong>);

      // Update last index to the end of the match
      lastIndex = matchEnd;
    }

    // Add any remaining text after the last bold match
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts;
  };
  return (
    <div
      className={`rectangle-container ${isExpanded ? "expanded" : "collapsed"}`}
      onClick={toggleExpand}
    >
      <div
        className="rectangle-content"
        ref={contentRef}
        style={{ height: isExpanded ? "auto" : "auto" }} // Set content height dynamically
      >
        <h2>{title}</h2>
        <h6>{date}</h6>

        {isExpanded ? renderContent(fullContent) : renderContent(preview)}
      </div>
    </div>
  );
};

export default BlogRectangle;
