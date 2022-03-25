import React from "react";
import PostCreateForm from "./PostCreateForm";
import Posts from "./Posts";

const DashBoard = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <PostCreateForm />
      <Posts />
    </>
  );
};

export default DashBoard;
