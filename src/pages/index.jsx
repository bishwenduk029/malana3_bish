import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { BlogsProvider } from "../state/blog-context";
import AddBlog from "./addBlog";
import Blog from "./blog";
import Blogs from "./blogs";
import EditBlog from "./editBlog";

const App = () => {
  return (
    <BrowserRouter>
      <BlogsProvider>
        <Switch>
          <Route path="/blogs/add">
            <AddBlog />
          </Route>
          <Route path="/blogs/:id/edit">
            <EditBlog />
          </Route>
          <Route path="/blogs/:id">
            <Blog />
          </Route>
          <Route path="/">
            <Blogs />
          </Route>
        </Switch>
      </BlogsProvider>
    </BrowserRouter>
  );
};

export default App;
