import React from "react";
import { useBlogs } from "../state/blog-context";

const InputAtom = () => {
  const { dispatch } = useBlogs();
  return (
    <span className="sm:w-2/3 w-full rounded ring-2 ring-offset-green-300 dark:ring-offset-yellow-300">
      <input
        className="w-full text-2xl p-2 "
        placeholder="Search Blogs"
        onChange={(e) => {
          const searchText = e.target.value;
          dispatch({ type: "SEARCH_BLOGS", payload: { searchText } });
        }}
      />
    </span>
  );
};

export default InputAtom;
