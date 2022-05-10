import React, { useState } from "react";
import {
  Container,
  Box,
  Avatar,
  Typography,
  Grid,
  CssBaseline,
} from "@mui/material";
import BlogForm from "../components/BlogForm";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContextProvider";
import { useBlog } from "../context/BlogContextProvider";
import { toastSuccess, toastError } from "../helpers/toastNotify";
import blog from "../assets/blok.png";

const NewBlog = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const { addBlog } = useBlog();

  const blog = {
    author: currentUser?.email,
    title: "",
    content: "",
    get_comment_count: 0,
    get_like_count: 0,
    image: "",
    published_date: Date.now(),
  };

  const handler = (x) => {
    try {
      addBlog(x);
      navigate("/");
      toastSuccess("Blog added");
    } catch {
      toastError("Blog can not be added");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ height: "fit-content", maxWidth: "600px" }}>
      <CssBaseline />
      <Box
        sx={{
          height: "100%",
          marginTop: "10vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          alt="avatar_img"
          src={blog}
          sx={{
            width: 220,
            height: 220,
            marginTop: "20px",
            backgroundColor: "#046582",
          }}
        />

        <Typography variant="h4" component="h1" sx={{ m: 4, color: "#046582" }}>
          ── New Blog ──
        </Typography>
        <BlogForm blog={blog} handler={handler} />
      </Box>
    </Container>
  );
};

export default NewBlog;
