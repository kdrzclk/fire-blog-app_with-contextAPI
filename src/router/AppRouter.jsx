import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import NewBlog from "../pages/NewBlog";
import UpdateBlog from "../pages/UpdateBlog";
import Detail from "../pages/Detail";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/new-blog" element={<NewBlog />} />
        <Route path="/update-blog/" element={<UpdateBlog />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
