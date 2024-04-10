import React from "react";
import BlogDisplay from "../component/blogDisplay";
import blogsList from "../data/blogs";

const blogs = () => {
  const displayBlogs = () => {
    let display = [];
    let result = [];

    blogsList.map((blog) => {
      return display.push(<BlogDisplay blog={blog} key={blog.title} />);
    });

    for (let i = 0; i < blogsList.length; i += 1) {
      result.push(<div className="col-md-4 blog">{display[i]}</div>);
    }

    return result;
  };

  return (
    <section>
      <div className="container pt-3">
        <div className="row">
          <h1>Blogs</h1>
          <hr />
          {blogsList.length > 0 ? displayBlogs() : "No Blogs"}
        </div>
      </div>
    </section>
  );
};

export default blogs;
