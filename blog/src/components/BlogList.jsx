import React from 'react'
import './bloglist.css'

function BlogList({ blogs }) {
  return (
    <div className="list">
        {blogs.map((blog) => (
            <div className="blog" key={blog.id}>
                <h3>{blog.title}</h3>
                <p>Written By {blog.author}</p>
            </div>
        ))}
    </div>
  )
}

export default BlogList
