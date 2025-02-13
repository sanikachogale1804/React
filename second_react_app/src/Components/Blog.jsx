import React from 'react'

import './Blog.css'; 

const Blog = () => {
    const title = "10 Tips for Effective Time Management";
    const author = "John Doe";
    const description = "In today's fast-paced world, effective time management is crucial for success. Learn 10 tips to improve your time management skills and boost productivity.";
    const image = "https://via.placeholder.com/150";

    const inlineStyles = {
        container: {
          padding: '20px',
          backgroundColor: '#f4f4f4',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          maxWidth: '600px',
          margin: '20px auto'
        },
        title: {
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#333',
          marginBottom: '10px'
        },
        author: {
          fontSize: '16px',
          color: '#777',
          marginBottom: '20px'
        },
        description: {
          fontSize: '16px',
          color: '#555',
          lineHeight: '1.6'
        },
        image: {
          width: '100%',
          height: 'auto',
          borderRadius: '8px',
          marginBottom: '20px'
        }
      };

    return (
        <div style={inlineStyles.container}>
        <h2 style={inlineStyles.title}>{title}</h2>
        <p style={inlineStyles.author}>By {author}</p>
        <img src={image} alt="Blog Thumbnail" style={inlineStyles.image} />
        <p style={inlineStyles.description}>{description}</p>
      </div>
    )
}

export default Blog
