import React from "react";
import { Stack, Box, Typography, CardMedia } from "@mui/material";
import { demoProfilePicture } from "../Utils/constants";

const CommentCard = ({ comment }) => {
  const commentSnippet = comment?.snippet?.topLevelComment?.snippet;
  return (
    <Stack
      direction="row"
      justifyContent="start"
      alignContent="center"
      p={2}
      display="flex"
      gap={2}
    >
      <Box>
        <CardMedia
          image={commentSnippet?.authorProfileImageUrl || demoProfilePicture}
          alt="comment_Image"
          sx={{ borderRadius: "50%", height: "50px", width: "50px", mb: 2 }}
        />
      </Box>
      <Box
        flexDirection="column"
        gap={2}
        sx={{ display: "flex", color: "white" }}
      >
        <Typography variant="subtitle1">
          {commentSnippet?.authorDisplayName}
        </Typography>
        <Typography variant="body2">{commentSnippet?.textDisplay}</Typography>
      </Box>
    </Stack>
  );
};

export default CommentCard;
