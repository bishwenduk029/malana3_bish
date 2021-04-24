import React from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import Layout from "../components/layout";
import { deleteBlog, useBlogs } from "../state/blog-context";
import formatDate from "../utils";

const Blog = () => {
  let { id } = useParams();
  const history = useHistory();
  const { state, dispatch } = useBlogs();
  const blog = state.displayBlogs.filter((blog) => {
    if (blog) return blog.id === parseInt(id);
    return false;
  })[0];
  const handleDelete = async () => {
    await deleteBlog(dispatch, blog);
    history.push("/");
  };
  return (
    <Layout
      renderInSlot={() => <h1 className="text-2xl font-bold">Blog Post</h1>}
    >
      <div className="h-screen mt-3 text-light-secondary dark:text-dark-primary text-2xl py-10">
        {blog && (
          <div className="flex flex-col justify-between">
            <span className="flex flex-row justify-between">
              <h3 className="font-extrabold">{blog.title}</h3>
              <div className="flex flex-row justify-around items-baseline w-1/6">
                <Link
                  to={`/blogs/${blog.id}/edit`}
                  className="cursor-pointer"
                  title="Edit blog"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                    <path
                      fillRule="evenodd"
                      d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <span className="cursor-pointer" onClick={handleDelete}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </span>
              </div>
            </span>
            <h4 className="text-xl">{formatDate(blog.timestamp)}</h4>
            <p className="mt-12">{blog.text}</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Blog;
