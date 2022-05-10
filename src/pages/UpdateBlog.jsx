import React, { useState, useEffect, useMemo } from "react";
import { Container, Box, Avatar, Typography, CssBaseline } from "@mui/material";
import BlogForm from "../components/BlogForm";
import { useNavigate } from "react-router-dom";
import { useBlog } from "../context/BlogContextProvider";
import { toastSuccess, toastError } from "../helpers/toastNotify";
import blog from "../assets/blok.png";

const UpdateBlog = ({ match }) => {
  const navigate = useNavigate();

  const { getOneBlog, updateBlog } = useBlog();
  const result = getOneBlog(match.params.id);

  const res = useMemo(() => {
    return result ? result[0] : { title: "", content: "", image: "" };
  }, [result]);

  useEffect(() => {
    setNewBlog(res);
  }, [res]);

  const [newBlog, setNewBlog] = useState(res);

  const handler = (newBlog) => {
    try {
      updateBlog(newBlog);
      navigate("/");
      toastSuccess("Blog Updated");
    } catch {
      toastError("Blog can not be updated");
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
          src={newBlog?.image}
          sx={{
            width: 220,
            height: 220,
            marginTop: "20px",
            backgroundColor: "#046582",
          }}
        />

        <Typography variant="h4" component="h1" sx={{ m: 4, color: "#046582" }}>
          ── Update Blog ──
        </Typography>
        <BlogForm blog={newBlog} handler={handler} />
      </Box>
    </Container>
  );
};

export default UpdateBlog;
