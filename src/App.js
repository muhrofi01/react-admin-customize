import * as React from "react";
import { Admin, Resource, CustomRoutes } from "react-admin";
import { Route } from "react-router-dom";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./users";
import MyLayout from "./MyLayout";
import authProvider from "./authProvider";
import { PostList } from "./posts";
import Home from "./Home";
import RedirectLogin from "./Redirect";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const checkLogin = () => {
  return localStorage.getItem("username") ? false : true;
};

const App = () => {
  return (
    <Admin dataProvider={dataProvider} layout={MyLayout} loginPage={<RedirectLogin />} authProvider={authProvider}>
      <CustomRoutes>
        <Route path="/" element={<Home openLogin={checkLogin} />} />
      </CustomRoutes>
      <Resource name="users" list={UserList} />
      <Resource name="posts" list={PostList} />
    </Admin>
  );
};

export default App;
