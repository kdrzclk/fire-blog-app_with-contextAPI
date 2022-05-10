import React, { useState, useEffect } from "react";
import { Container, Box, Grid, TextField, Button } from "@mui/material";

const BlogForm = (props) => {
  const { handler, blog } = props;

  const [newBlog, setNewBlog] = useState(blog);

  useEffect(() => {
    setNewBlog(blog);
  }, [blog]);

  const styles = {
    submit: {
      backgroundColor: "#046582",
      color: "white",
      fontWeight: "bold",
      "&:hover": {
        color: "#046582",
        backgroundColor: "#D5D5D5",
      },
    },
  };

  return (
    <Grid container justify="center">
      <Container
        maxWidth="sm"
        sx={{ height: "fit-content", maxWidth: "600px" }}
      >
        <Box
          sx={{
            height: "100%",
            marginTop: "10vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <form onSubmit={() => handler(newBlog)}>
            <Grid spacing={4}>
              <Grid item xs={12}>
                <TextField
                  sx={{ width: "400px", mb: 2 }}
                  id="title"
                  label="Title"
                  name="title"
                  variant="outlined"
                  type="title"
                  value={newBlog.title}
                  autoComplete="on"
                  onChange={(e) =>
                    setNewBlog({ ...newBlog, title: e.target.value })
                  }
                  //   fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  sx={{ width: "400px", mb: 2 }}
                  id="image"
                  label="Image URL"
                  name="image"
                  variant="outlined"
                  type="image-url"
                  value={newBlog.image}
                  autoComplete="on"
                  onChange={(e) =>
                    setNewBlog({ ...newBlog, image: e.target.value })
                  }
                  //   fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  sx={{ width: "400px", mb: 2 }}
                  id="content"
                  label="Content"
                  name="content"
                  multiline
                  variant="outlined"
                  type="image-url"
                  value={newBlog.content}
                  autoComplete="on"
                  onChange={(e) =>
                    setNewBlog({ ...newBlog, content: e.target.value })
                  }
                  //   fullWidth
                  required
                  rows={15}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  sx={styles.submit}
                  variant="contained"
                  fullWidth
                  type="submit"
                >
                  SUBMIT
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </Grid>
  );
};

export default BlogForm;
