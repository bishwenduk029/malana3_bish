/* eslint-disable no-undef */
import { useEffect } from "react";
import { useBlogs } from "../state/blog-context";

const useDarkMode = () => {
  const { state, dispatch } = useBlogs();
  const setIsModeDark = (darkMode) => {
    dispatch({ type: "CHANGE_MODE", payload: { darkMode } });
  };
  useEffect(() => {
    if (state.darkMode) {
      if (window.document.documentElement.classList.contains("dark")) return;
      window.document.documentElement.classList.remove("light");
      window.document.documentElement.classList.add("dark");
    } else {
      if (window.document.documentElement.classList.contains("light")) return;
      window.document.documentElement.classList.remove("dark");
      window.document.documentElement.classList.add("light");
    }
  }, [state.darkMode]);
  return [state.darkMode, setIsModeDark];
};

export default useDarkMode;
