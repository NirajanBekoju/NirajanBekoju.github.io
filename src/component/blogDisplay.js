import React from "react";

const BlogDisplay = ({ blog }) => {
  return (
    <div>
      <div class="card mb-4">
        <a href={blog.link} target="_blank">
          <img src={blog.image} alt="Avatar" width="100%" />
        </a>
        <div class="container-card p-3 m-2">
          <h4>
            <b>{blog.title}</b>
          </h4>
          <p>{blog.description}</p>

          <a
            href={blog.link}
            target="_blank"
            type="button"
            class="btn btn-info text-white"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogDisplay;
