import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import users from "./users";
//
import "./../styles/App.css";
import UserList from "./UserList";
import UserDetails from "./UserDetails";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserList />} />
        {
          users.map((user, index) => (
            <Route key={index} path={`/users/${user.id}`} element={<UserDetails userId={user.id} />} />
          ))
        }
      </Routes>
    </div>
  );
};

export default App;
