import React from "react";
import { Outlet } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AuthLayout = () => {
  return (
    <div>
      <Outlet>
       
      </Outlet>
    </div>
  );
};

export default AuthLayout;