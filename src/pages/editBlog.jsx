import React from "react";
import { useParams } from "react-router";
import BlogForm from "../components/blogForm";
import Layout from "../components/layout";
import { useBlogs } from "../state/blog-context";

const EditBlog = () => {
  let { id } = useParams();
  const { state } = useBlogs();
  const blog = state.displayBlogs.filter((blog) => {
    return blog.id === parseInt(id);
  })[0];
  return (
    <Layout
      renderInSlot={() => (
        <h1 className="text-center sm:text-left text-2xl font-bold">
          Edit Blog
        </h1>
      )}
    >
      <div className="h-screen text-light-secondary dark:text-dark-primary text-2xl py-10">
        {blog && <BlogForm blog={blog} />}
      </div>
    </Layout>
  );
};

export default EditBlog;
