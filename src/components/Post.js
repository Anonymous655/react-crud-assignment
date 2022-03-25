import React, { useState } from "react";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import { Button, Modal, Box, TextField } from "@mui/material";

const Post = ({ post }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [postText, setPostText] = useState("");
  const handleOpen = () => {
    setOpen(true);
    setName(post.title);
    setPostText(post.body);
  };
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    padding: 4,
  };
  const deleteHandler = async () => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${post.id}`);
      alert("Post Deleted Successfully");
    } catch (error) {
      alert("Something went wrong");
      console.warn(error);
    }
  };
  const editHandler = async () => {
      console.log("edit")
    try {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
            method: 'PUT',
            body: JSON.stringify({
              id: post.id,
              title: name,
              body: postText,
              userId: post.userId
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
        
          alert("Post Edited Successfully");
          handleClose()

        
    //   console.log(res)
    } catch (error) {
    console.log("error",error)
      alert("Something went wrong");
    }
  };
  return (
    <div style={{ width: "70vw", margin: "auto" }}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={post.title}
          secondary={<React.Fragment>{post.body}</React.Fragment>}
        />
      </ListItem>
      <IconButton
        edge="end"
        aria-label="delete"
        onClick={() => deleteHandler(post.id)}
      >
        <DeleteIcon />
      </IconButton>
      {"  "}

      <IconButton edge="end" aria-label="edit" onClick={handleOpen}>
        <EditIcon />
      </IconButton>
      <Divider variant="inset" />
      <br />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <TextField
              label="Enter Tittle"
              variant="standard"
              fullWidth
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <br />
            <br />
            <TextField
              label="Enter Description"
              variant="standard"
              multiline
              fullWidth
              onChange={(e) => setPostText(e.target.value)}
              value={postText}
            />
            <br />
            <br />
            <Button variant="contained" size="large" onClick={() => editHandler()}>
              Edit Post
            </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Post;
