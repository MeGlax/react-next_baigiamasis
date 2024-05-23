import React from "react";
import styles from "./PostsWrapper.module.css";
import Post from "@/components/molecules/Post/Post";

const PostsWrapper = () => {
  return (
    <div className={styles.main}>
      <Post />
      <Post />
    </div>
  );
};

export default PostsWrapper;
