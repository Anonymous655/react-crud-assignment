import { React, useState } from "react";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import uuid from 'react-uuid'

const PostCreateForm = () => {
  const [name, setName] = useState("");
  const [post, setPost] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log("name and Post Content", name, post);
    try {
        await axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: name,
            body: post,
            userId: uuid()
        })
        // console.log("post response", res.data)
        setName("");
        setPost("");
        alert("Post Created Successfully")
    } catch (error) {
        alert("something went wrong")
    }

  };
  return (
    <form
      onSubmit={submitHandler}
      style={{
        width: "60vw",
        margin: "auto",
        background: "#F0FFFF",
        borderRadius: "15px",
        padding: "25px",
      }}
    >
      <TextField
        label="Enter Title"
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
        onChange={(e) => setPost(e.target.value)}
        value={post}
      />
      <br />
      <br />
      <Button variant="contained" size="large" type="submit">
        Post
      </Button>
    </form>
  );
};

export default PostCreateForm;
