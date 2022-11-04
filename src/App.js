import * as React from "react";
import { Admin, Resource, CustomRoutes } from 'react-admin';
import { Route } from 'react-router-dom';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './users';
import MyLayout from './MyLayout';
import MUIButton from './MUIButton';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dataProvider={dataProvider} layout={MyLayout}>
    <Resource name="users" list={UserList} />
    <CustomRoutes>
      <Route path="/button" element={<MUIButton />} />
    </CustomRoutes>
  </Admin>
);

export default App;