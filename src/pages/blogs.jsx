import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import InputAtom from "../components/inputAtom";
import Layout from "../components/layout";
import { fetchBlogs, useBlogs } from "../state/blog-context";
import formatDate from "../utils";

const BlogItem = ({ blog }) => {
  return (
    <Link to={`/blogs/${blog.id}`}>
      <div className="flex flex-col w-full mb-12 hover:bg-dark-accent hover:bg-opacity-10 p-2 cursor-pointer">
        <h3 className="">{blog.title}</h3>
        <div className="flex flex-row justify-between w-1/5 sm:w-2/6 align-baseline text-lg text-light-tertiary dark:text-dark-tertiary">
          {blog.timestamp && <span>{formatDate(blog.timestamp)}</span>}
        </div>
      </div>
    </Link>
  );
};

const Blogs = () => {
  const { dispatch, state } = useBlogs();
  useEffect(async () => {
    await fetchBlogs(dispatch, state);
  }, []);
  return (
    <Layout
      renderInSlot={() => <InputAtom />}
      renderInActionSlot={() => (
        <Link
          to="/blogs/add"
          className="text-center sm:text-left font-bold flex flex-row justify-items-center border-2 bg-dark-accent text-white dark:text-primary-dark dark:bg-primary-accent rounded p-2 items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
              clipRule="evenodd"
            />
          </svg>
          <span className="ml-1">Create New Blog</span>
        </Link>
      )}
    >
      <div className="w-full mt-3 text-light-secondary dark:text-dark-primary text-2xl">
        {state.displayBlogs
          .filter((blog) => blog.id && blog.title && blog.title.length)
          .map((blog) => (
            <BlogItem key={blog.id} blog={blog} />
          ))}
      </div>
    </Layout>
  );
};

export default Blogs;
