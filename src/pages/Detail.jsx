import React from "react";
import {
  Container,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Button,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import moment from "moment";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContextProvider";
import { useBlog } from "../context/BlogContextProvider";
import { toastSuccess, toastError } from "../helpers/toastNotify";

const Details = ({ match }) => {
  const { currentUser } = useAuth();

  const navigate = useNavigate();

  const { getOneBlog, deleteOneBlog } = useBlog();
  const result = getOneBlog(match.params.id);
  const res = result ? result[0] : { title: "", content: "", image: "" };

  const deleteHandler = (id) => {
    deleteOneBlog(id);
    navigate("/");
    toastSuccess("Deleted Succesfully");
  };

  const updateHandler = (id) => {
    navigate(`/update-blog/${id}`);
  };

  const styles = {
    delete: {
      backgroundColor: "#e72b80",
      color: "white",
      "&:hover": {
        backgroundColor: "#c11261",
      },
    },

    update: {
      backgroundColor: "#f3e9e9",
      color: "black",
      "&:hover": {
        backgroundColor: "#a9a2a2",
      },
    },
  };

  return (
    <Container>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 70,
          marginBottom: 20,
        }}
      >
        <Typography
          sx={{ textAlign: "center", margin: "10px", color: "#046582" }}
          variant="h3"
          noWrap
        >
          ──── Details ────
        </Typography>

        <div>
          <Card sx={{ width: "70vw", mx: "auto", mt: 2 }}>
            <div>
              <CardMedia
                sx={{ height: "0", paddingTop: "56.25%" }}
                image={res.image}
                title={res.title}
              />
              <CardContent
                sx={{ backgroundColor: "#efeefe", minHeight: "200px" }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  sx={{ textAlign: "center", margin: "10px", color: "#046582" }}
                >
                  {res.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  sx={{ textAlign: "center" }}
                >
                  {moment(res.published_date).format("MMM DD, YYYY")}
                </Typography>
                <p>{res.content}</p>
              </CardContent>
            </div>
            <CardActions>
              <AccountCircle sx={{ marginBottom: "7px" }} />
              <Typography gutterBottom variant="h6" component="h2">
                {res.author}
              </Typography>
            </CardActions>
            <CardActions>
              <IconButton aria-label="add to favorites" sx={{ p: 3 }}>
                <FavoriteIcon
                  color={res.get_like_count > 0 ? "secondary" : "disabled"}
                />
              </IconButton>
              <Typography variant="body2" color="textSecondary">
                {res.get_like_count}
              </Typography>
              <IconButton aria-label="comment count" sx={{ p: 3 }}>
                <ChatBubbleOutlineIcon />
              </IconButton>
              <Typography variant="body2" color="textSecondary">
                {res.get_comment_count}
              </Typography>
            </CardActions>
          </Card>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              margin: "20px",
            }}
          >
            {currentUser?.email === res.author ? (
              <>
                <Button
                  variant="contained"
                  sx={styles.update}
                  startIcon={<ModeEditOutlineOutlinedIcon />}
                  // onClick={() =>
                  //   updateHandler(post.id, post.title, post.content, post.image)
                  // }
                  onClick={updateHandler}
                  // onMouseUp={() =>
                  //   updateHandler(post.id, post.title, post.content, post.image)
                  // }
                >
                  Update
                </Button>
                <Button
                  variant="contained"
                  sx={styles.delete}
                  startIcon={<DeleteIcon />}
                  onClick={deleteHandler}
                >
                  Delete
                </Button>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Details;
