/* eslint-disable unicorn/no-null */
import React, { createContext } from "react";

//const SALESFORCE_BLOG_API = "http://localhost:4000/blogs/";
const SALESFORCE_BLOG_API = "https://salesforce-blogs.herokuapp.com/blogs/api/";

const BlogsContext = createContext();

const initialState = {
  loading: false,
  blogs: [],
  displayBlogs: [],
  errors: null,
  searchText: "",
  darkMode: false,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "FETCH_IN_PROGRESS":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        blogs: [...payload],
        displayBlogs: [...payload],
      };

    case "ADD_BLOG":
      return {
        ...state,
        loading: false,
        displayBlogs: [payload.blog, ...state.blogs],
        blogs: [payload.blog, ...state.blogs],
      };

    case "EDIT_BLOG":
      const blogs = state.blogs.filter((blog) => blog.id !== payload.blog.id);
      return {
        ...state,
        loading: false,
        blogs: [payload.blog, ...blogs],
        displayBlogs: [payload.blog, ...blogs],
      };

    case "DELETE_BLOG":
      const afterDeleteBlogs = state.blogs.filter((blog) => {
        return blog.id !== payload.blog.id;
      });
      return {
        ...state,
        loading: false,
        displayBlogs: [...afterDeleteBlogs],
        blogs: [...afterDeleteBlogs],
      };

    case "FETCH_FAIL":
      if (payload)
        return {
          ...state,
          loading: false,
          errors: payload.error,
        };

    case "SEARCH_BLOGS":
      const searchText = state.searchText + payload.searchText;
      return {
        ...state,
        displayBlogs: [
          ...state.blogs.filter(
            (blog) =>
              blog.title.toLowerCase().indexOf(searchText.toLowerCase()) >= 0
          ),
        ],
      };

    case "CHANGE_MODE":
      return {
        ...state,
        darkMode: payload.darkMode,
      };
    default:
      return state;
  }
};

const BlogsProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <BlogsContext.Provider value={value}>{children}</BlogsContext.Provider>
  );
};

const useBlogs = () => {
  const context = React.useContext(BlogsContext);
  return context;
};

const fetchBlogs = async (dispatch, state, fromCache = true) => {
  try {
    if (state.blogs.length > 0 && fromCache) {
      return;
    }
    dispatch("FETCH_IN_PROGRESS");
    const response = await fetch(SALESFORCE_BLOG_API);
    const blogs = await response.json();
    dispatch({ type: "FETCH_SUCCESS", payload: blogs });
  } catch (error) {
    console.log(error);
    dispatch("EDIT_FAIL", { error });
  }
};

const addBlog = async (dispatch, blog) => {
  try {
    dispatch({ type: "FETCH_IN_PROGRESS" });
    const response = await fetch(SALESFORCE_BLOG_API, {
      method: "POST",
      body: JSON.stringify(blog),
      headers: { "Content-Type": "application/json" },
    });
    const newBlog = await response.json();
    dispatch({ type: "ADD_BLOG", payload: { blog: newBlog } });
    return newBlog;
  } catch (error) {
    dispatch("FETCH_FAIL", { error });
  }
};

const editBlog = async (dispatch, blog) => {
  try {
    dispatch({ type: "FETCH_IN_PROGRESS" });
    const response = await fetch(SALESFORCE_BLOG_API + blog.id, {
      method: "POST",
      body: JSON.stringify({
        title: blog.title,
        text: blog.text,
        timestamp: blog.timestamp,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const newBlog = await response.json();
    dispatch({ type: "EDIT_BLOG", payload: { blog: newBlog } });
  } catch (error) {
    dispatch("EDIT_FAIL", { error, payload: { blog } });
  }
};

const deleteBlog = async (dispatch, blog) => {
  try {
    dispatch({ type: "FETCH_IN_PROGRESS" });
    const response = await fetch(SALESFORCE_BLOG_API + blog.id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    await response.json();
    dispatch({ type: "DELETE_BLOG", payload: { blog: blog } });
  } catch (error) {
    dispatch("EDIT_FAIL", { error, payload: { blog } });
  }
};

export { BlogsProvider, useBlogs, fetchBlogs, editBlog, deleteBlog, addBlog };
