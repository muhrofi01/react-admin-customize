import jsonServerProvider from "ra-data-json-server";
import * as React from "react";
import { Admin, CustomRoutes, Resource } from "react-admin";
import { Route } from "react-router-dom";
import authProvider from "./authProvider";
import Home from "./Home";
import MyLayout from "./MyLayout";
import { PostList } from "./posts";
import RedirectLogin from "./Redirect";
import { UserList } from "./users";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const checkLogin = () => {
  return localStorage.getItem("username") ? false : true;
};

const App = () => {
  return (
    <Admin
      dataProvider={dataProvider}
      layout={MyLayout}
      loginPage={<RedirectLogin />}
      authProvider={authProvider}
    >
      <CustomRoutes>
        <Route path="/" element={<Home openLogin={checkLogin} />} />
      </CustomRoutes>
      <Resource name="users" list={UserList} />
      <Resource name="posts" list={PostList} />
    </Admin>
  );
};

export default App;
