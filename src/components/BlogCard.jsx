import { AccountCircle } from "@mui/icons-material";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContextProvider";
import { toastSuccess, toastError } from "../helpers/toastNotify";

const BlogCard = ({ post }) => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const {
    id,
    author,
    content,
    get_comment_count,
    get_like_count,
    image,
    published_date,
    title,
  } = post;

  const handleDetails = () => {
    if (!currentUser) {
      toastError("Please Login to get the details");
    }
    navigate(`/details/${id}`);
  };

  const handleFavorite = () => {
    post.get_like_count += 1;
  };

  return (
    <Card sx={{ minWidth: "345px", maxWidth: "345px" }}>
      <CardActionArea onClick={handleDetails}>
        <CardMedia sx={{ height: "140px" }} image={image} title={title} />
        <CardContent sx={{ backgroundColor: "#efeefe", height: "125px" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            sx={{ color: "#046582" }}
          >
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {moment(published_date).format("MMM DD, YYYY")}
          </Typography>
          <p
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              TextOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            {content}
          </p>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <AccountCircle sx={{ marginBottom: "7px" }} />
        <Typography gutterBottom variant="h6" component="h2">
          {author}
        </Typography>
      </CardActions>
      <CardActions>
        <IconButton
          onClick={handleFavorite}
          aria-label="add to favorites"
          sx={{ p: 3 }}
        >
          <FavoriteIcon color={get_like_count > 0 ? "secondary" : "disabled"} />
        </IconButton>
        <Typography variant="body2" color="textSecondary">
          {get_like_count}
        </Typography>
        <IconButton aria-label="comment count" sx={{ p: 3 }}>
          <ChatBubbleOutlineIcon />
        </IconButton>
        <Typography variant="body2" color="textSecondary">
          {get_comment_count}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
