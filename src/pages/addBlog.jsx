import React from "react";
import BlogForm from "../components/blogForm";
import Layout from "../components/layout";

const AddBlog = () => {
  return (
    <Layout
      renderInSlot={() => (
        <h1 className="text-center sm:text-left text-2xl font-bold">
          Add New Blog
        </h1>
      )}
    >
      <div className="h-screen text-light-secondary dark:text-dark-primary text-2xl py-10">
        {<BlogForm blog={null} />}
      </div>
    </Layout>
  );
};

export default AddBlog;
