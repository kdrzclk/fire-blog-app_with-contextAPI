import React from "react";
import BlogCard from "../components/BlogCard";
import { Typography, Grid, Container } from "@mui/material";
import { useBlog } from "../context/BlogContextProvider";
import loadingGif from "../assets/loading.gif";

const Dashboard = () => {
  const { currentBlogs } = useBlog();

  return (
    <Container>
      <div style={{ margin: "70px auto" }}>
        <Typography
          sx={{ textAlign: "center", color: "#046582", margin: "50px" }}
          variant="h3"
          noWrap
        >
          ──── Dashboard ────
        </Typography>
        <>
          <Grid container sx={{ flexGrow: 1 }} spacing={5} justify="center">
            <Grid item xs={12}>
              <Grid container justify="center" spacing={5}>
                {currentBlogs === undefined ? (
                  <img
                    src={loadingGif}
                    style={{ width: "150px", margin: "30px auto" }}
                    alt="loading"
                  />
                ) : currentBlogs ? (
                  currentBlogs?.map((item, id) => (
                    <Grid key={id} item>
                      <BlogCard post={item} />
                    </Grid>
                  ))
                ) : (
                  <h3>No data available.</h3>
                )}
              </Grid>
            </Grid>
          </Grid>
        </>
      </div>
    </Container>
  );
};

export default Dashboard;
