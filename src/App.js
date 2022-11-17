import jsonServerProvider from "ra-data-json-server";
import * as React from "react";
import { Admin, CustomRoutes, Resource } from "react-admin";
import { Route } from "react-router-dom";
import authProvider from "./authProvider";
import CustomizedDialogs from "./CustomizedDialogs";
import Home from "./Home";
import MyLayout from "./MyLayout";
import { PostList } from "./posts";
import { UserList } from "./users";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => {
  return (
    <Admin
      dataProvider={dataProvider}
      layout={MyLayout}
      loginPage={false}
      authProvider={authProvider}
    >
      <CustomRoutes>
        <Route path="/" element={<Home />} />
      </CustomRoutes>

      <CustomRoutes>
        <Route path="/login" element={<CustomizedDialogs open={true} />} />
      </CustomRoutes>

      <Resource name="users" list={UserList} />

      <Resource name="posts" list={PostList} />
    </Admin>
  );
};

export default App;
