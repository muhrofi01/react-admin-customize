import * as React from "react";
import { Admin, Resource, CustomRoutes } from 'react-admin';
import { Route } from 'react-router-dom';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './users';
import MyLayout from './MyLayout';
import authProvider from "./authProvider";
import { PostList } from "./posts";
import Home from "./Home";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dataProvider={dataProvider} layout={MyLayout} authProvider={authProvider}>
    <CustomRoutes>
      <Route path="/" element={<Home />} />
    </CustomRoutes>
    <Resource name="users" list={UserList} />
    <Resource name="posts" list={PostList} />
  </Admin>
);

export default App;