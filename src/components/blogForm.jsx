import React, { useRef } from "react";
import { useHistory } from "react-router";
import { addBlog, editBlog, useBlogs } from "../state/blog-context";

const BlogForm = ({ blog }) => {
  const history = useHistory();
  const { dispatch } = useBlogs();
  const inputRef = useRef(null);
  const textAreaRef = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!blog) {
      const newBlog = await addBlog(dispatch, {
        title: inputRef.current.value,
        text: textAreaRef.current.value,
        timestamp: new Date(),
      });
      history.push(`/blogs/${newBlog.id}`);
      return;
    }
    await editBlog(dispatch, {
      id: blog.id,
      title: inputRef.current.value,
      text: textAreaRef.current.value,
      timestamp: new Date(),
    });
    history.push(`/blogs/${blog.id}`);
  };
  return (
    <div className="h-screen">
      <form
        className="flex flex-col justify-between dark:text-light-primary"
        onSubmit={handleSubmit}
      >
        <label>Title:</label>
        <span className="ring-2 rounded outline-none ring-offset-green-300 border-2">
          <input
            ref={inputRef}
            className="p-2 w-full"
            type="text"
            defaultValue={blog ? blog.title : ""}
          />
        </span>

        <label className="mt-10">Text:</label>
        <span className="ring-2 rounded outline-none ring-offset-green-300 border-2">
          <textarea
            ref={textAreaRef}
            className="p-4 w-full"
            rows="16"
            cols="16"
            defaultValue={blog ? blog.text : ""}
          />
        </span>
        <button
          type="submit"
          className="dark:bg-primary-accent my-4 dark:text-primary-dark p-2 bg-dark-accent text-white"
        >
          {blog ? "Edit Blog Post" : "Add New Blog"}
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
